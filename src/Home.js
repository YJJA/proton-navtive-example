import React, { Component } from 'react'
import { Button, TextInput, Grid, ProgressBar, Dialog } from 'proton-native'

class Home extends Component {
  state = {
    text: 'this is Home Page'
  }

  onClick = (text) => {
    const abc = Dialog('Message', {title: '一个弹框', options: {}})
    console.log(abc)
  }

  render () {
    return (
      <Grid padded>
        <Button row={0} column={0} onClick={this.onClick}>
          Hello
        </Button>
        <ProgressBar row={0} column={1} value={10} />
        <TextInput row={1} column={0}>
          Hi
        </TextInput>
      </Grid>
    )
  }
}

export default Home
