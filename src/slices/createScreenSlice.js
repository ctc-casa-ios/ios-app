import { createSlice } from '@reduxjs/toolkit'

export const createScreenSlice = createSlice({
  name: 'createScreen',
  initialState: {
    checkboxes1: [
      { id: 1, title: 'Case 1', checked: false },
      { id: 2, title: 'Case 2', checked: false },
      { id: 3, title: 'Case 3', checked: false },
      { id: 4, title: 'Case 4', checked: false },
    ],
    checkboxesCasa: [
      { id: 5, title: 'Supervisor', checked: false },
      { id: 6, title: 'Youth', checked: false },
    ],
    checkboxesEducation: [
      { id: 7, title: 'Guidance Counselor', checked: false },
      { id: 8, title: 'IEP Team', checked: false },
      { id: 9, title: 'School', checked: false },
      { id: 10, title: 'Teacher', checked: false },
    ],
    checkboxesFamily: [
      { id: 11, title: 'Parent', checked: false },
      { id: 12, title: 'Aunt Uncle or Cousin', checked: false },
      { id: 13, title: 'Fictive Kin', checked: false },
      { id: 14, title: 'Grandparent', checked: false },
      { id: 15, title: 'Other Family', checked: false },
      { id: 16, title: 'Sibling', checked: false },
    ],
    checkboxesHealth: [
      { id: 17, title: 'Medical Professional', checked: false },
      { id: 18, title: 'Mental Health Therapist', checked: false },
      { id: 19, title: 'Other Therapist', checked: false },
      { id: 20, title: 'Psychiatric Practitioner', checked: false },
    ],
    checkboxesLegal: [
      { id: 21, title: 'Attorney', checked: false },
      { id: 22, title: 'Court', checked: false },
    ],
    checkboxesPlacement: [
      { id: 23, title: 'Caregiver Family', checked: false },
      { id: 24, title: 'Foster Parent', checked: false },
      { id: 25, title: 'Therapeutic Agency Worker', checked: false },
    ],
    checkboxesSS: [
      { id: 26, title: 'Social Worker', checked: false },
    ],
    checkboxes3a: [
      { id: 27, title: 'Yes', checked: false },
      { id: 28, title: 'No', checked: false },
    ],
    checkboxes3b: [
      { id: 29, title: 'In Person', checked: false },
      { id: 30, title: 'Text/Email', checked: false },
      { id: 31, title: 'Video', checked: false },
      { id: 32, title: 'Voice Only', checked: false },
      { id: 33, title: 'Letter', checked: false },
    ],
    checkboxes4b: [
      { id: 34, title: 'Yes', checked: false },
      { id: 35, title: 'No', checked: false },
    ],
    currentPage: 1,
    miles: '',
    hours: "",
    minutes: '',
    notes: '',
    date: new Date().toISOString().split('T')[0].toString(),
  },
  reducers: {
    check1: (state, action) => {
      return {
        ...state,
        checkboxes1: state.checkboxes1.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check2: (state, action) => {
      return {
        ...state,
        checkboxesCasa: state.checkboxesCasa.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check3: (state, action) => {
      return {
        ...state,
        checkboxesEducation: state.checkboxesEducation.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check4: (state, action) => {
      return {
        ...state,
        checkboxesFamily: state.checkboxesFamily.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check5: (state, action) => {
      return {
        ...state,
        checkboxesHealth: state.checkboxesHealth.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check6: (state, action) => {
      return {
        ...state,
        checkboxesLegal: state.checkboxesLegal.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check7: (state, action) => {
      return {
        ...state,
        checkboxesPlacement: state.checkboxesPlacement.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check8: (state, action) => {
      return {
        ...state,
        checkboxesSS: state.checkboxesSS.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check9: (state, action) => {
      return {
        ...state,
        checkboxes3a: state.checkboxes3a.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check10: (state, action) => {
      return {
        ...state,
        checkboxes3b: state.checkboxes3b.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    check11: (state, action) => {
      return {
        ...state,
        checkboxes4b: state.checkboxes4b.map((checkbox) =>
          checkbox.id === action.payload ? { ...checkbox, checked: !checkbox.checked } : checkbox
        )
      };
    },
    
    increment: state => {
        state.currentPage += 1
      },
    decrement: state => {
      state.currentPage -= 1
    },

    milesState: (state, action) => {
      return {
        ...state,
        miles: action.payload,
      };
    },

    hoursState: (state, action) => {
      return {
        ...state,
        hours: action.payload,
      };
    },

    minutesState: (state, action) => {
      return {
        ...state,
        minutes: action.payload,
      };
    },
    
    notesState: (state, action) => {
      return {
        ...state,
       notes: action.payload,
      };
    },

    dateState: (state, action) => {
      return {
        ...state,
       date: action.payload,
      };
    }

  }
})

// Action creators are generated for each case reducer function
export const { check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11, increment, decrement, milesState, notesState, hoursState, minutesState, dateState } = createScreenSlice.actions

export default createScreenSlice.reducer