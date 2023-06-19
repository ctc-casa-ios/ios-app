import React, { useState } from 'react';
import { styled } from 'nativewind';

import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import Button from '../components/Button';
import BottomTabNavigator from '../components/BottomTabNavigator';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);

const CaseContactCreateScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [miles, setMiles] = useState(0);
  const [notes, setNotes] = useState('');

  const [checkboxes1, setCheckboxes1] = useState([
    { id: 1, title: 'Case 1', checked: false },
    { id: 2, title: 'Case 2', checked: false },
    { id: 3, title: 'Case 3', checked: false },
    { id: 4, title: 'Case 4', checked: false },
  ]);
  const [checkboxesCasa, setCheckboxesCasa] = useState([
    { id: 5, title: 'Supervisor', checked: false },
    { id: 6, title: 'Youth', checked: false },
  ]);
  const [checkboxesEducation, setCheckboxesEducation] = useState([
    { id: 7, title: 'Guidance Counselor', checked: false },
    { id: 8, title: 'IEP Team', checked: false },
    { id: 9, title: 'School', checked: false },
    { id: 10, title: 'Teacher', checked: false },
  ]);
  const [checkboxesFamily, setCheckboxesFamily] = useState([
    { id: 11, title: 'Parent', checked: false },
    { id: 12, title: 'Aunt Uncle or Cousin', checked: false },
    { id: 13, title: 'Fictive Kin', checked: false },
    { id: 14, title: 'Grandparent', checked: false },
    { id: 15, title: 'Other Family', checked: false },
    { id: 16, title: 'Sibling', checked: false },
  ]);
  const [checkboxesHealth, setCheckboxesHealth] = useState([
    { id: 17, title: 'Medical Professional', checked: false },
    { id: 18, title: 'Mental Health Therapist', checked: false },
    { id: 19, title: 'Other Therapist', checked: false },
    { id: 20, title: 'Psychiatric Practitioner', checked: false },
  ]);
  const [checkboxesLegal, setCheckboxesLegal] = useState([
    { id: 21, title: 'Attorney', checked: false },
    { id: 22, title: 'Court', checked: false },
  ]);
  const [checkboxesPlacement, setCheckboxesPlacement] = useState([
    { id: 23, title: 'Caregiver Family', checked: false },
    { id: 24, title: 'Foster Parent', checked: false },
    { id: 25, title: 'Therapeutic Agency Worker', checked: false },
  ]);
  const [checkboxesSS, setCheckboxesSS] = useState([
    { id: 26, title: 'Social Worker', checked: false },
  ]);

  const [checkboxes3a, setCheckboxes3a] = useState([
    { id: 27, title: 'Yes', checked: false },
    { id: 28, title: 'No', checked: false },
  ]);

  const [checkboxes3b, setCheckboxes3b] = useState([
    { id: 29, title: 'In Person', checked: false },
    { id: 30, title: 'Text/Email', checked: false },
    { id: 31, title: 'Video', checked: false },
    { id: 32, title: 'Voice Only', checked: false },
    { id: 33, title: 'Letter', checked: false },
  ]);

  const [checkboxes4b, setCheckboxes4b] = useState([
    { id: 34, title: 'Yes', checked: false },
    { id: 35, title: 'No', checked: false },
  ]);

  const [formData, setFormData] = useState({});

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checkboxId) => {
    if (checkboxId < 5) {
      setCheckboxes1((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 7) {
      setCheckboxesCasa((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 11) {
      setCheckboxesEducation((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 17) {
      setCheckboxesFamily((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 21) {
      setCheckboxesHealth((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 23) {
      setCheckboxesLegal((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 26) {
      setCheckboxesPlacement((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId === 26) {
      setCheckboxesSS((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 29) {
      setCheckboxesPlacement((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 34) {
      setCheckboxesPlacement((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    } else if (checkboxId < 36) {
      setCheckboxesPlacement((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      );
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    const formattedCurrentDate = currentDate.toISOString().split('T')[0].toString();
    setShow(false);
    console.log(formattedCurrentDate);
    setDate(formattedCurrentDate);
  };

  const handleTextChange = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    setMiles(formattedText);
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
                    value={date}
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

              <StyledText className="text-xl pt-2 text-center">d. Duration of meating</StyledText>
              <StyledView className="flex p-3 flex-row">
                <StyledTextInput
                  className="flex bg-white p-1 self-center text-2xl"
                  placeholder="Enter a Number"
                  onChangeText={handleTextChange}
                  keyboardType="numeric"
                />
                <StyledText className="text-xl pt-2 text-center"> hour(s)</StyledText>
              </StyledView>

              <StyledView className="flex p-3 flex-row">
                <StyledTextInput
                  className="flex bg-white p-1 self-center text-2xl"
                  placeholder="Enter a Number"
                  onChangeText={handleTextChange}
                  keyboardType="numeric"
                />
                <StyledText className="text-xl pt-2 text-center"> minute(s)</StyledText>
              </StyledView>

              <StyledText className="text-2xl pt-4 text-end">4. Enter Travel Details🔸</StyledText>

              <StyledText className="text-xl pt-2 text-center">a. Miles Driven</StyledText>
              <StyledTextInput
                className="flex bg-white p-1 self-center text-2xl"
                placeholder="Enter a Number"
                onChangeText={handleTextChange}
                keyboardType="numeric"
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
              onChangeText={(text) => setNotes(text)}
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
          {currentPage > 0 && <Button title="Previous" onPress={handlePreviousPage} />}
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
