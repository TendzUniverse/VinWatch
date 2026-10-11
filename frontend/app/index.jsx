import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { supabase } from '../services/supabase';

export default function App() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    const { data, error } = await supabase.from('reports').select('*');
    if (error) {
      console.error('Error fetching reports:', error.message);
    } else {
      setReports(data);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total Reports Loaded: {reports.length}</Text>
    </View>
  );
}
