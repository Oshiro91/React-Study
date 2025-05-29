import { useForm } from 'react-hook-form';
import axios from 'axios';

function Empresas({ kpiData }) {
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
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
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