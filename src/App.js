import { useState, useEffect } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form'
import { AUTHOR } from './constants'
import { ChatList } from './components/ChatList/ChatList'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
}
  from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9800",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

export function App() {
  const [messages, setMessages] = useState([])
  const theme = useTheme()

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Welcome to chat!</h1>
        <Form addMessage={addMessage} />
        <Box sx={{ gridTemplateColumns: 'repeat(2, 1fr)', }}>
          <Grid container spacing={2} rowSpacing={5} columns={16} >
            <Grid item xs={8}>
              <Item>
                <ChatList />
              </Item>
            </Grid>
            <Grid item xs={8} >
              <Item>
                <MessageList messages={messages} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}
export default App