import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Form.css';


function Form({ enterpriseSchema, onSuccess }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  // Create an empty form template based on the schema
  const getEmptyTemplate = () => {
    if (!enterpriseSchema) return {};
    
    const template = {};
    Object.keys(enterpriseSchema).forEach(key => {
      // Set default values based on data type
      const type = typeof enterpriseSchema[key];
      if (type === 'number') {
        template[key] = 0;
      } else if (type === 'boolean') {
        template[key] = false;
      } else if (type === 'string') {
        template[key] = '';
      } else {
        template[key] = null;
      }
    });
    return template;
  };

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
  
  if (!enterpriseSchema) return null;
  
  return (
    <div className="form-container">
      <h2>Add New Enterprise</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="kpi-form">
        {Object.keys(enterpriseSchema).map((key) => (
          <FormField
            key={key}
            name={key}
            register={register}
            error={errors[key]}
            type={typeof enterpriseSchema[key]}
          />
        ))}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

function FormField({ name, register, error, type }) {
  // Skip id field or make it readonly if it's an auto-increment field
  const isIdField = name.toLowerCase() === 'id';
  
  const getInputType = () => {
    if (type === 'number') return 'number';
    if (type === 'boolean') return 'checkbox';
    return 'text';
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      {type === 'boolean' ? (
        <input
          id={name}
          type="checkbox"
          {...register(name)}
          disabled={isIdField}
        />
      ) : (
        <input
          id={name}
          type={getInputType()}
          {...register(name, { 
            required: !isIdField ? `${name} is required` : false,
            valueAsNumber: type === 'number'
          })}
          disabled={isIdField}
        />
      )}
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}

export default Form;