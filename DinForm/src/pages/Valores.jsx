import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../components/Form';
import SupaTable from '../components/SupaTable';
import './empresas.css';

function Empresas({ kpiData }) {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnterprises();
  }, []);

  const fetchEnterprises = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://agdznbhmbteodywfnuqq.supabase.co/rest/v1/VARIABLES_VALUES', {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s',
          'Content-Type': 'application/json'
        }
      });
      setEnterprises(response.data);
    } catch (err) {
      console.error('Error fetching enterprises:', err);
      setError('Failed to fetch enterprises');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="empresas-container">
      <h1 className="empresas-title">Empresas</h1>
      {enterprises.length > 0 && (
        <Form enterpriseSchema={enterprises[0]} onSuccess={fetchEnterprises} tableName={'VARIABLES_VALUES'} />
      )}

      <div className="enterprises-table-container">
        <h2 className="enterprises-table-title">Empresas Registradas</h2>
        {loading ? (
          <p className="loading-message">Loading data...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <SupaTable enterprises={enterprises} />
        )}
      </div>
    </div>
  );
}


export default Empresas;
