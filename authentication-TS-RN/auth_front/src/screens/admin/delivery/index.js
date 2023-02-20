import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function Delivery() {
  return (
   <View>

    <Text>nnnn</Text>
   </View>
  );
}


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     fetch('https://your-api-endpoint.com/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//         } else {
//           // Do something with the successful login response (e.g. save the token)
//         }
//       })
//       .catch((error) => {
//         setError('An error occurred while logging in');
//       });
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {error && <Text>{error}</Text>}
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default Login;
