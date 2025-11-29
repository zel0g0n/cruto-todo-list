export const initialState = {
  data: [
    { 
      id: 1,
      active: true, 
      title: 'Wake Up',
      size: '05:30',
      notified: false
    },
    { 
      id: 2,
      active: false,
      title: 'Get up',
      size: '05:40',
      notified: false

    },
    { 
      id: 3,
      active: false,
      title: 'Breakfast',
      size: '11:00',
      notified: false

    },
    
  ],
  deleted: [],
  keyword: '',
  filter: 'All',
  originalData: [
    { 
      id: 1,
      active: true, 
      title: 'Wake Up',
      size: '05:30',
      notified: false
    },
    { 
      id: 2,
      active: false,
      title: 'Get up',
      size: '05:40',
      notified: false

    },
    { 
      id: 3,
      active: false,
      title: 'Breakfast',
      size: '11:00',
      notified: false

    },
    
  ]
}

const applyFilters = (state) => {
  let result = [...state.originalData]
  if(state.keyword.trim() !== '') {
    result = result.filter(item => (
      item.title.toLowerCase().includes(state.keyword.toLowerCase())
    ))
  }

  if(state.filter === 'deleted') {
    result = [...state.deleted]
  }else if(state.filter === 'completed') {
    console.log(state.filter)
    result = result.filter((i => i.active))
  }

  return result
  
}


export const reducer = (state, action) => {
  switch(action.type) {

    case "updateKey": {
      const updated = { ...state, keyword: action.payload.keyword };
      return { ...updated, data: applyFilters(updated) };
    }

    case "updateFilter": {
      const updated = { ...state, filter: action.payload };
      return { ...updated, data: applyFilters(updated) };
    }

    case "add": {
      const newItem = {
        title: action.payload.title,
        size: action.payload.size,
        active: false,
        notified: false,
        id: Math.ceil(Math.random() * 100000)
      };

      const updated = {
        ...state,
        originalData: [...state.originalData, newItem]
      };

      return { ...updated, data: applyFilters(updated) };
    }

    case "delete": {
      const id = action.payload;

      const updated = {
        ...state,
        originalData: state.originalData.filter(i => i.id !== id),
        deleted: [
          ...state.deleted,
          ...state.originalData.filter(i => i.id === id)
        ]
      };

      return { ...updated, data: applyFilters(updated) };
    }

    case "activeToggle": {
      const updatedOriginal = state.originalData.map(item =>
        item.id === action.payload
          ? { ...item, active: !item.active }
          : item
      );

      const updated = { ...state, originalData: updatedOriginal };
      return { ...updated, data: applyFilters(updated) };
    }

    default:
      return state;
  }
};
