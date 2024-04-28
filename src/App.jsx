import React, { useContext, useState } from 'react'
import Admin from './Admin'
import Guest from './Guest'
import User from './User'
import { GlobalContext } from './Context/context'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserByRole = (params) => ComponentByRoles[params] 
|| ComponentByRoles['guest']
function App() {

  const { state, dispatch } = useContext(GlobalContext)
  console.log(state)

  const [role, setRole] = useState('admin')
  const CurrentUser = getUserByRole(state.role)
  return <CurrentUser />





}

export default App