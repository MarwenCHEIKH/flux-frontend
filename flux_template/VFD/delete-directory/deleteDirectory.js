function deleteDirectory() {
  const form = document.getElementById("deleteDirectory");

  form.addEventListener("submit", function (event) {
    const field1 = document.getElementById("dir_path").value;
    const field2 = document.getElementById("alias").value;

    if (!field1 && !field2) {
      alert("Please provide a path or an alias to identify your directory");
      event.preventDefault(); // Prevent form submission
    }
    event.preventDefault();

    const formData = new FormData(form);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
    // Send the formDataObject to the backend using a fetch request
    fetch("http://localhost:3000/delete-directory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Failed to create directory");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
