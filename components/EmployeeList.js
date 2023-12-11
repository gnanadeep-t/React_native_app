import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d') // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EmployeeCard employee={item} employees={employees}/>
        )}
      />
    </View>
  );
};

export default EmployeeList;
