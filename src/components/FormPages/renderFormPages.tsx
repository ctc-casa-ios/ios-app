import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';




import { toggleCheckbox } from 'src/slices/createScreenSlice';

import { useSelector, useDispatch } from 'react-redux';





import Page1 from 'src/components/FormPages/Page1';
import Page2 from 'src/components/FormPages/Page2';
import Page3 from 'src/components/FormPages/Page3';
import Page4 from 'src/components/FormPages/Page4';


const renderFormPage = (currentPage) => {

  const dispatch = useDispatch();

  // Use selector to access specific checkbox group from the state
  const checkboxes1 = useSelector((state) => state.createScreen.checkboxes1);


  const checkboxesCasa = useSelector((state) => state.createScreen.checkboxesCasa);
  const checkboxesEducation = useSelector((state) => state.createScreen.checkboxesEducation);
  const checkboxesFamily = useSelector((state) => state.createScreen.checkboxesFamily);
  const checkboxesHealth = useSelector((state) => state.createScreen.checkboxesHealth);
  const checkboxesLegal = useSelector((state) => state.createScreen.checkboxesLegal);
  const checkboxesPlacement = useSelector((state) => state.createScreen.checkboxesPlacement);
  const checkboxesSS = useSelector((state) => state.createScreen.checkboxesSS);


  const checkboxes3a = useSelector((state) => state.createScreen.checkboxes3a)
  const checkboxes3b = useSelector((state) => state.createScreen.checkboxes3b)
  const checkboxes4b = useSelector((state) => state.createScreen.checkboxes4b)



  const [show, setShow] = useState(false);
  const textInputRef = useRef(null);

  const miles = useSelector((state) => state.createScreen.miles)

  const hours = useSelector((state) => state.createScreen.hours)
  const minutes = useSelector((state) => state.createScreen.minutes)

  const notes = useSelector((state) => state.createScreen.notes)

  const date = useSelector((state) => state.createScreen.date)



  const allCheckboxes = { checkboxes1, checkboxesCasa,
			  checkboxesEducation, checkboxesFamily,
			  checkboxesHealth, checkboxesLegal,
			  checkboxesPlacement, checkboxesSS,
			  checkboxes3a, checkboxes3b,
			  checkboxes4b };


        
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
  const handleMilesChange = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    dispatch(milesState(formattedText))
  };


  const handleNotesChange = (text) => {
    
    dispatch(notesState(text))
  };














  // Function to handle checkbox change
  const handleCheckboxChange = (group, id) => {
    dispatch(toggleCheckbox({ group, id }));
  };

  switch (currentPage) {
    case 1:
      return ( Page1( checkboxes1, handleCheckboxChange ) ); 
         
       case 2:
       return ( Page2( {checkboxesCasa, checkboxesEducation, checkboxesFamily, checkboxesHealth, 
        checkboxesLegal, checkboxesPlacement, checkboxesSS}, handleCheckboxChange ) );



      case 3:
      return ( Page3( {checkboxes3a, checkboxes3b, checkboxes4b }, 
                      {
                      handleHoursChange, handleMinutesChange,
                      textInputRef, show, handleMilesChange }, 
                      handleCheckboxChange )

	);	
       

	case 4:
	    return ( Page4( {notes, handleNotesChange}, {miles, hours, minutes, date, allCheckboxes} ) );
      
  }
};

export default renderFormPage;
