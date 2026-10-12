import { createContext, useContext, useState } from 'react';

// ------------------------------------------------------------------
// TEMPORARY: demo accounts held inside the app, so role-based sign-in
// works before the backend exists. Replace the inside of signIn,
// signUp and signOut with Supabase calls later. Screens stay the same.
// Remove the demo passwords before the app is submitted.
// ------------------------------------------------------------------
const DEMO_ACCOUNTS = [
  {
    email: 'user@vinwatch.co.za',
    phone: '0821111111',
    password: 'User@1234',
    role: 'user',
    name: 'John Smith',
  },
  {
    email: 'official@vinwatch.co.za',
    phone: '0822222222',
    password: 'Official@1234',
    role: 'official',
    name: 'Officer Dlamini',
  },
  {
    email: 'admin@vinwatch.co.za',
    phone: '0823333333',
    password: 'Admin@1234',
    role: 'admin',
    name: 'System Admin',
  },
];

// Where each role lands after signing in
const HOME_ROUTES = {
  user: '/(user)/home',
  official: '/(official)/dashboard',
  admin: '/(admin)/dashboard',
};

export function homeRoute(role) {
  return HOME_ROUTES[role] || '/(auth)/welcome';
}

// "+27 82 111 1111", "082-111-1111" and "0821111111" all become "0821111111"
const normalizePhone = (value) =>
  String(value || '')
    .replace(/[^\d+]/g, '')
    .replace(/^\+27/, '0');

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, name, role } or null
  const [accounts, setAccounts] = useState(DEMO_ACCOUNTS);

  // identifier can be an email address or a phone number.
  // Returns { ok: true } or { ok: false, error }
  const signIn = (identifier, password) => {
    const typed = String(identifier || '').trim().toLowerCase();
    const typedPhone = normalizePhone(identifier);

    const match = accounts.find(
      (a) =>
        (a.email.toLowerCase() === typed ||
          (typedPhone.length >= 9 && normalizePhone(a.phone) === typedPhone)) &&
        a.password === password
    );

    if (!match) {
      return { ok: false, error: 'Incorrect email, phone number or password.' };
    }
    setUser({ email: match.email, name: match.name, role: match.role });
    return { ok: true };
  };

  // Anyone who signs up is a regular user. Officials and admins are
  // created by an administrator, never by self-registration.
  const signUp = ({ name, email, phone, password }) => {
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanPhone = normalizePhone(phone);

    if (accounts.some((a) => a.email.toLowerCase() === cleanEmail)) {
      return { ok: false, error: 'An account with this email already exists.' };
    }
    if (
      cleanPhone &&
      accounts.some((a) => normalizePhone(a.phone) === cleanPhone)
    ) {
      return { ok: false, error: 'An account with this phone number already exists.' };
    }

    const account = {
      email: cleanEmail,
      phone: cleanPhone,
      password,
      role: 'user',
      name: name || cleanEmail.split('@')[0],
    };
    setAccounts((prev) => [...prev, account]);
    setUser({ email: account.email, name: account.name, role: account.role });
    return { ok: true };
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}

