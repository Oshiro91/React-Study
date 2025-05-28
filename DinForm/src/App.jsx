import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [kpiData, setKpiData] = useState({});

  // Function to fetch data from Supabase
  const fetchDataFromSupabase = async () => {
    try {
      const response = await axios.get('https://agdznbhmbteodywfnuqq.supabase.co/rest/v1/ENTERPRISES', {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s',
        }
      });
      setKpiData(response.data[1]);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the fetchDataFromSupabase function on component mount
  useEffect(() => {
    fetchDataFromSupabase();
  }, []);

  return (
    <div>
      <h1>KPI Data</h1>
      {Object.keys(kpiData).length > 0 && (
        <Form kpiData={kpiData} />
      )}
    </div>
  );
}

function Form({ kpiData }) {
  const [formData, setFormData] = useState({});

  // Generate input fields based on the fetched data
  Object.keys(kpiData).map((key) => {
    return (
      <Input
        key={key}
        value={kpiData[key]}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
      />
    );
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://agdznbhmbteodywfnuqq.supabase.co/rest/v1/ENTERPRISES', formData, {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s',
        }
      });
      alert('Data inserted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(kpiData).map((key) => (
        <Input
          key={key}
          value={formData[key] || kpiData[key]}
          name={key}
          onChange={(e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          }}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

function Input({ value, name, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={`${typeof value}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App
