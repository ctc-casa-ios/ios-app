import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Text, ScrollView, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

import renderFormPage from 'src/components/FormPages/renderFormPages';
import Button from '../components/Button';

import tw from 'twrnc';


const CaseContactCreateScreen = () => {


  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);


  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const handleNextPage = () => {
    if (currentPage < 4) setCurrentPage(currentPage + 1);
  };


  return (
    
    <View style={tw`flex items-center gap-3 flex-1 bg-[#d5d7da]`}>

      <View style={tw`flex-col justify-center h-1/6`}>
        <Text style={tw`text-3xl flex justify-start font-bold`}>{`Case Contact Create`}</Text>
      </View>


      <View style={tw`flex justify-around items-center h-4/6 w-80`}>

	<ScrollView style={tw`flex p-2 flex-col h-5/6 bg-[#c0c5cd] rounded-xl w-80`}>
          {renderFormPage(currentPage)} 
	</ScrollView>


        <View style={tw`flex flex-row w-80 justify-around`}> 
          {currentPage > 1 && currentPage < 4 && <Button title="Previous" textStyle={tw`font-bold text-lg`} onPress={handlePreviousPage}/>}
          {currentPage < 4 ? (
            <Button title="Next" textStyle={tw`font-bold text-lg`} onPress={handleNextPage}/>
	  ) : (
             <Button title="Previous" textStyle={tw`font-bold text-lg`} onPress={handlePreviousPage}/>
	  )}
        </View>

      </View>

    </View>
     );

};

export default CaseContactCreateScreen;
