import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCard = ({ employee, employees }) => {
  const manager = employees.find(emp => emp.id === employee.parentId);
  const subordinates = employees.filter(emp => emp.parentId === employee.id);
  const getManagerName = (parentId) => {
    const manager = employees.find(emp => emp.id === parentId);
    return manager ? manager.name : '';
  };
  return (
    <View style={[styles.container, { backgroundColor: employee.backgroundColor }]}>
      <Text style={styles.item}>{`Name: ${employee.name}`}</Text>
      <Text style={styles.item}>{`Email: ${employee.email}`}</Text>
      <Text style={styles.item}>{`Phone: ${employee.phone}`}</Text>
      <Text style={styles.item}>{`Address: ${employee.address}`}</Text>
      <Text style={styles.item}>{`Manager: ${getManagerName(employee.parentId)}`}</Text>
      {subordinates.length > 0 && (
        <Text style={styles.item}>
          {`Subordinates: ${subordinates.map(emp => emp.name).join(', ')}`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {  
      flex: 1, 
      borderWidth: 1,
      borderColor: 'grey',
      margin: 10,
      padding: 10,
      borderRadius: 5,
      
  },  
  item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  },  
})  

export default EmployeeCard;
