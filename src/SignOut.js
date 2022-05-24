import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from './firebase'


function SignOut() {


  return (
    <div style={{
      display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
  }}>
    <Button onClick= {()=>{auth.signOut()}} style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }}>SignOut</Button>

    </div>

  )
}

export default SignOut