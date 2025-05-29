import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
      const response = await axios.get('https://agdznbhmbteodywfnuqq.supabase.co/rest/v1/ENTERPRISES', {
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
      {Object.keys(kpiData).length > 0 && (
        <Form kpiData={kpiData} onSuccess={fetchEnterprises} />
      )}

      <div className="enterprises-table-container">
        <h2 className="enterprises-table-title">Registered Enterprises</h2>
        {loading ? (
          <p className="loading-message">Loading data...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <EnterpriseTable enterprises={enterprises} />
        )}
      </div>
    </div>
  );
}

function EnterpriseTable({ enterprises }) {
  if (enterprises.length === 0) {
    return <p className="no-data-message">No enterprises found.</p>;
  }

  // Get column names from the first record
  const columns = enterprises.length > 0 ? Object.keys(enterprises[0]) : [];

  return (
    <div className="table-responsive">
      <table className="enterprises-table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enterprises.map((enterprise, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={`${index}-${column}`}>{enterprise[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Form({ kpiData, onSuccess }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: kpiData
  });

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post('https://agdznbhmbteodywfnuqq.supabase.co/rest/v1/ENTERPRISES', data, {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s',
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        }
      });
      alert('Data inserted successfully');
      reset(); // Reset form after successful submission
      if (onSuccess) onSuccess(); // Refresh the table data
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form: ' + error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="kpi-form">
      {Object.keys(kpiData).map((key) => (
        <FormField
          key={key}
          name={key}
          defaultValue={kpiData[key]}
          register={register}
          error={errors[key]}
          type={typeof kpiData[key]}
        />
      ))}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

function FormField({ name, defaultValue, register, error, type }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type={type === 'number' ? 'number' : 'text'}
        {...register(name, { 
          required: `${name} is required`,
          valueAsNumber: type === 'number'
        })}
        defaultValue={defaultValue}
      />
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}

export default Empresas;
