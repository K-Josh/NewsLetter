import React from 'react';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div>
        <Card 
        imgURL="https://images.unsplash.com/photo-1682687219570-4c596363fd96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60" 
        heading=" Hey there want some early morning tips"
        paragraph=" Sign up to our Newsletter to get started welcome on board"
        emailInput=""
        button=""
        />
        <Footer />
    </div>
  )
}

export default App;
