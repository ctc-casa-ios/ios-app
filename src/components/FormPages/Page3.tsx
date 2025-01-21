import React from 'react';
import { View, Text, ScrollView, TextInput, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Button from 'src/components/Button';

import tw from 'twrnc';


const submit = ( miles, hours, minutes, notes,  date, allCheckboxes ) => {

  const formData = {
    miles: miles,
    hours: hours,
    minutes: minutes,
    notes: notes,
    date: date,
    checkboxes: allCheckboxes
  };

  // dispatch(submitForm(formData));
  console.log("Form Data Submitted:", formData);

  Alert.alert('Form Submitted!', JSON.stringify(formData, null, 2), [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

}


const Page3 = ( {checkboxes3a, checkboxes3b, checkboxes4b }, 
                {miles, hours, minutes, notes,  date, allCheckboxes,
                 handleHoursChange, handleMinutesChange,
                 textInputRef, show, handleMilesChange }, handleCheckboxChange ) => (

    <View style={tw`p-4`}>
      
    <Text style={tw`text-2xl text-center`}>3. Enter Contact Details🔸 </Text>
    <ScrollView style={tw`flex h-280 flex-col`}>
      

      <Text style={tw`text-xl pt-2 text-center`}>a. Contact Made</Text>
      {checkboxes3a.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxes3a', checkbox.id)}
        />
      ))}


  <Text style={tw`text-xl pt-2 text-center`}>b. Contact Medium</Text>
      {checkboxes3b.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxes3b', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>c. Contact Date</Text>
      <View style={tw`flex`}>
      <Button title="Enter Date" onPress={() => setShow(true)} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            maximumDate={new Date()}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Text style={tw`text-center text-3xl`}>
          {typeof date === 'string' ? date : ''}
        </Text>
      </View>

      
      <Text style={tw`text-xl pt-2 text-center`}>d. Duration of meeting</Text>
      <View style={tw`flex p-3 flex-row`}>
        <TextInput
          style={tw`flex bg-white p-1 self-center text-2xl`}
          placeholder="Enter a Number"
          onChangeText={handleHoursChange}
          keyboardType="numeric"
          value={hours}
        />
        <Text style={tw`text-xl pt-2 text-center`}> hour(s)</Text>
      </View>

      <View style={tw`flex p-3 flex-row`}>
        <TextInput
          ref={textInputRef}
          style={tw`flex bg-white p-1 self-center text-2xl`}
          placeholder="Enter a Number"
          onChangeText={handleMinutesChange}
          keyboardType="numeric"
          value={minutes}
        />
        <Text style={tw`text-xl pt-2 text-center`}> minute(s)</Text>
      </View>
       


    <View style={tw`p-4`}>

      <Text style={tw`text-2xl pt-4 text-end`}>4. Enter Travel Details🔸</Text>

     
      <Text style={tw`text-xl pt-2 text-center`}>a. Miles Driven</Text>
      <TextInput
        style={tw`flex bg-white p-1 self-center text-2xl`}
        placeholder="Enter a Number"
        onChangeText={handleMilesChange}
        keyboardType="numeric"
        value={miles}
      />

    
      <Text style={tw`text-xl pt-2 text-center`}>
        b. Want Driving Reimbursement
      </Text>
      {checkboxes4b.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => { handleCheckboxChange('checkboxes4b', checkbox.id) } }
        />
      ))}
  </View>
    </ScrollView>
   </View>

);

export default Page3;
