const tableBody =
document.getElementById("tableBody");

// ==============================
// Fetch Messages
// ==============================

async function fetchMessages(){

  try{

    // Loading State

    tableBody.innerHTML = `

      <tr>

        <td colspan="4"
            style="text-align:center; padding:25px;">

          Loading Messages...

        </td>

      </tr>

    `;

    // Fetch API

    const response = await fetch(
      "https://she-can-foundation-1-38gf.onrender.com/api/messages"
    );

    // Convert Data

    const data = await response.json();

    // Clear Table

    tableBody.innerHTML = "";

    // Empty Data Check

    if(data.length === 0){

      tableBody.innerHTML = `

        <tr>

          <td colspan="4"
              style="text-align:center; padding:25px;">

            No Messages Found

          </td>

        </tr>

      `;

      return;

    }

    // Reverse Latest Messages First

    const reversedData = data.reverse();

    // Loop Data

    reversedData.forEach((item) => {

      // Create Row

      const row =
      document.createElement("tr");

      // Date Formatting

      const formattedDate =
      new Date(item.submittedAt)
      .toLocaleString();

      // Row Content

      row.innerHTML = `

        <td>${item.name}</td>

        <td>${item.email}</td>

        <td>${item.message}</td>

        <td>${formattedDate}</td>

      `;

      // Append Row

      tableBody.appendChild(row);

    });

  }catch(error){

    console.log(error);

    tableBody.innerHTML = `

      <tr>

        <td colspan="4"
            style="text-align:center;
                   color:red;
                   padding:25px;">

          Failed To Load Messages

        </td>

      </tr>

    `;

  }

}

// ==============================
// Initial Load
// ==============================

fetchMessages();

// ==============================
// Auto Refresh Every 5 Seconds
// ==============================

setInterval(() => {

  fetchMessages();

},5000);