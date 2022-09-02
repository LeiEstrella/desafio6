async function handleProducts(products) {
    console.log(products)
    const recursoRemoto = await fetch(`views/products.ejs`);
    const layoutText = await recursoRemoto.text();
    const functionTemplate = ejs.compile(layoutText);
@@ -16,7 +15,6 @@ async function handleProducts(products) {
  }

  async function handleMessages(messages) {
    console.log(messages)
    const recursoRemoto = await fetch(`views/messages.ejs`);
    const layoutText = await recursoRemoto.text();
    const functionTemplate = ejs.compile(layoutText);
@@ -30,23 +28,21 @@ addProductForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const product = {
    title: addProductForm[0].value, // document.getElementById('txtNombre').value
    price: `$ ${addProductForm[1].value}`, // document.getElementById('txtApellido').value
    title: addProductForm[0].value, 
    price: `$ ${addProductForm[1].value}`, 
    thumbnail: addProductForm[2].value,
  };

  socket.emit('newProduct', product);

  // addProductForm.reset();
  addProductForm.reset();
});


const addMessageForm = document.getElementById('formAddMessage');

addMessageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // const inputEmail = document.getElementById('inputEmail');
  // const inputMessage = document.getElementById('inputMessage');
    const message = {
      email: addMessageForm[0].value,
      text: addMessageForm[1].value,}
)