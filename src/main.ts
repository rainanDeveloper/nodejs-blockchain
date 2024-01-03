const app = () => {
  setTimeout(() => {
    app();
  }, 200);
}

app();