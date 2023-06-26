import React, { useState, useRef } from 'react';
import { styled } from 'nativewind';

import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import Button from '../components/Button';
import BottomTabNavigator from '../components/BottomTabNavigator';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11, milesState, notesState, hoursState, minutesState, dateState  } from '../slices/createScreenSlice'


const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);

const CaseContactCreateScreen = ({ navigation }) => {
  // const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch()

  // const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  

  const textInputRef = useRef(null);

  const currentPage = useSelector(state => state.createScreen.currentPage)

  const miles = useSelector(state => state.createScreen.miles)

  const hours = useSelector(state => state.createScreen.hours)
  const minutes = useSelector(state => state.createScreen.minutes)

  const notes = useSelector(state => state.createScreen.notes)

  const date = useSelector(state => state.createScreen.date)


  const checkboxes1 = useSelector(state => state.createScreen.checkboxes1)
  const checkboxesCasa = useSelector(state => state.createScreen.checkboxesCasa)
  const checkboxesEducation = useSelector(state => state.createScreen.checkboxesEducation)
  const checkboxesFamily = useSelector(state => state.createScreen.checkboxesFamily)
  const checkboxesHealth = useSelector(state => state.createScreen.checkboxesHealth)
  const checkboxesLegal = useSelector(state => state.createScreen.checkboxesLegal)
  const checkboxesPlacement = useSelector(state => state.createScreen.checkboxesPlacement)
  const checkboxesSS = useSelector(state => state.createScreen.checkboxesSS)
  const checkboxes3a = useSelector(state => state.createScreen.checkboxes3a)
  const checkboxes3b = useSelector(state => state.createScreen.checkboxes3b)
  const checkboxes4b = useSelector(state => state.createScreen.checkboxes4b)

  const [formData, setFormData] = useState({});

  const handleNextPage = () => {
    // setCurrentPage(currentPage + 1);
    dispatch(increment())
  };

  const handlePreviousPage = () => {
    // setCurrentPage(currentPage - 1);
    dispatch(decrement())
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checkboxId) => {
    if (checkboxId < 5) {
      dispatch(check1(checkboxId))
      
    } else if (checkboxId < 7) {
      dispatch(check2(checkboxId))
    } else if (checkboxId < 11) {
      dispatch(check3(checkboxId))
    } else if (checkboxId < 17) {
      dispatch(check4(checkboxId))
    } else if (checkboxId < 21) {
      dispatch(check5(checkboxId))
    } else if (checkboxId < 23) {
      dispatch(check6(checkboxId))
    } else if (checkboxId < 26) {
      dispatch(check7(checkboxId))
    } else if (checkboxId === 26) {
      dispatch(check8(checkboxId))
    } else if (checkboxId < 29) {
      dispatch(check9(checkboxId))
    } else if (checkboxId < 34) {
      dispatch(check10(checkboxId))
    } else if (checkboxId < 36) {
      dispatch(check11(checkboxId))
    } 
  };

  function decreaseLastTwoDigits(dateString) {
    const [year, month, day] = dateString.split('-');
    const lastTwoDigits = parseInt(day.substring(day.length - 2));
  
    // Decrease the last two digits by 1
    const decreasedDigits = lastTwoDigits - 1;
  
    // Construct the updated date string with decreased digits
    const updatedDateString = `${year}-${month}-${decreasedDigits.toString().padStart(2, '0')}`;
  
    return updatedDateString;
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    
    const formattedDate = currentDate.toISOString();
    const formattedCurrentDate = formattedDate.split('T')[0];
    setShow(false);
    const rightDate = decreaseLastTwoDigits(formattedCurrentDate.toString())
    dispatch(dateState(rightDate));
  };

  const handleMilesChange = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    dispatch(milesState(formattedText))
  };

  const handleNotesChange = (text) => {
    
    dispatch(notesState(text))
  };

  const handleHoursChange = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    dispatch(hoursState(formattedText))
  };

  const handleMinutesChange = (text) => {
    // Remove any non-numeric characters from the input
    if (text < 61) {
      const formattedText = text.replace(/[^0-9]/g, '');

      dispatch(minutesState(formattedText))
    } else {
      
      Alert.alert('Invalid input', 'Please enter a value between 0 and 60', [
        { text: 'OK', onPress: () => {dispatch(minutesState('')); if (textInputRef.current) {
          textInputRef.current.clear();
        }} }
      ]);
      
    }
  };

  const handleSubmit = () => {
    // Perform form submission logic with formData
    Alert.alert('Form Submitted!', JSON.stringify(formData));
  };

  const renderFormPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <View className="p-4">
            <StyledText className="text-2xl text-center">
              1. Select all relevant Casa cases🔸
            </StyledText>
            <StyledScrollView className="flex h-90 flex-col">
              {checkboxes1.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </StyledScrollView>
          </View>
        );
      case 2:
        return (
          <View className="p-4">
            <StyledText className="text-2xl text-center">2. Select all Content Types🔸</StyledText>
            <StyledScrollView className="flex h-90 flex-col">
              <StyledText className="text-xl pt-2 text-center">Casa</StyledText>
              {checkboxesCasa.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">Education</StyledText>
              {checkboxesEducation.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">Family</StyledText>
              {checkboxesFamily.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">Health</StyledText>
              {checkboxesHealth.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">Legal</StyledText>
              {checkboxesLegal.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">Placement</StyledText>
              {checkboxesPlacement.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">Social Services</StyledText>
              {checkboxesSS.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </StyledScrollView>
          </View>
        );
      case 3:
        return (
          <View className="p-4">
            <StyledText className="text-2xl text-center">3. Enter Contact Details🔸</StyledText>
            <StyledScrollView className="flex h-90 flex-col">
              <StyledText className="text-xl pt-2 text-center">a. Contact Made</StyledText>
              {checkboxes3a.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">b. Contact Medium</StyledText>
              {checkboxes3b.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}

              <StyledText className="text-xl pt-2 text-center">c. Contact Medium</StyledText>
              <StyledView>
                <StyledButton title="Enter Date" onPress={() => setShow(true)} />
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
                <StyledText className="text-center text-3xl ">
                  {typeof date === 'string' ? date : ''}
                </StyledText>
              </StyledView>

              <StyledText className="text-xl pt-2 text-center">d. Duration of meeting</StyledText>
              <StyledView className="flex p-3 flex-row">
                <StyledTextInput
                  className="flex bg-white p-1 self-center text-2xl"
                  placeholder="Enter a Number"
                  onChangeText={handleHoursChange}
                  keyboardType="numeric"
                  value={hours}
                />
                <StyledText className="text-xl pt-2 text-center"> hour(s)</StyledText>
              </StyledView>

              <StyledView className="flex p-3 flex-row">
                <StyledTextInput
                ref={textInputRef}
                  className="flex bg-white p-1 self-center text-2xl"
                  placeholder="Enter a Number"
                  onChangeText={handleMinutesChange}
                  keyboardType="numeric"
                  value={minutes}
                />
                <StyledText className="text-xl pt-2 text-center"> minute(s)</StyledText>
              </StyledView>

              <StyledText className="text-2xl pt-4 text-end">4. Enter Travel Details🔸</StyledText>

              <StyledText className="text-xl pt-2 text-center">a. Miles Driven</StyledText>
              <StyledTextInput
                className="flex bg-white p-1 self-center text-2xl"
                placeholder="Enter a Number"
                onChangeText={handleMilesChange}
                keyboardType="numeric"
                value={miles}
              />

              <StyledText className="text-xl pt-2 text-center">
                b. Want Driving Reimbursement
              </StyledText>
              {checkboxes4b.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  title={checkbox.title}
                  checked={checkbox.checked}
                  onPress={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </StyledScrollView>
          </View>
        );
      case 4:
        return (
          <View>
            <StyledText className="text-2xl text-center">5. Enter Enter Notes</StyledText>
            <StyledText className="text-sm text-center">
              Please refer to individuals by their roles instead of their names. Ex: My supervisor
              joined me for a call with the social worker to discuss my youth.
            </StyledText>
            <StyledTextInput
              style={{ flexWrap: 'wrap' }}
              multiline={true}
              numberOfLines={20}
              maxLength={300}
              className="text-lg border rounded rounded-xl bg-white pl-1 w-90"
              placeholder="Enter notes here"
              textAlignVertical="top"
              value={notes}
              onChangeText={handleNotesChange}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <StyledView className="flex items-center gap-3 flex-1 bg-[#d5d7da]">
      <StyledView className="flex-col justify-center h-1/6">
        <StyledText className="text-3xl flex justify-start font-bold">{`Case Contact Create`}</StyledText>
      </StyledView>
      <StyledView className="flex justify-around items-center h-4/6 w-80">
        <StyledScrollView className="flex p-2 flex-col h-5/6 bg-[#c0c5cd] rounded-xl w-80">
          {renderFormPage()}
        </StyledScrollView>
        <StyledView className="flex flex-row w-80 justify-around">
          {currentPage > 1 && <Button title="Previous" onPress={handlePreviousPage} />}
          {currentPage < 4 ? (
            <Button title="Next" onPress={handleNextPage} />
          ) : (
            <Button title="Submit" onPress={handleSubmit} />
          )}
        </StyledView>
      </StyledView>
      <BottomTabNavigator
        className="flex-row pb-10 items-center justify-around h-1/6 w-screen bg-[#345073]"
        navigation={navigation}
      />
    </StyledView>
  );
};

export default CaseContactCreateScreen;
