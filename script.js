function openCity(evt, cityName) {
   
    var i, tabcontent, tablinks;

    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.getElementById("defaultOpen").click();


// showtab
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#filter-buttons .btn');
    const filterableCards = document.querySelectorAll('.box-container1');

    function showCards(filter) {
        filterableCards.forEach(container => {
            if (container.getAttribute('data-name') === filter || filter === 'all') {
                container.style.display = 'grid'; 
                container.querySelectorAll('.box').forEach(box => {
                    box.style.display = 'block'; 
                });
            } else {
                container.style.display = 'none'; 
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            showCards(filter);
        });
    });

    showCards('kilo');
});




const prices = {
    "kilogram": { "3h": 25000, "6h": 15000, "12h": 10000, "1d": 6000 },
    "deep-cleaning": { "3h": 15000, "6h": 8000, "12h": 6000, "1d": 3000 },
    "shoe-wash": { "3h": 65000, "6h": 50000, "12h": 35000, "1d": 25000 }
};

function updateService() {
    const serviceType = document.getElementById("service-type").value;
    const serviceOptions = document.getElementById("service-options");
    const timeOptions = document.getElementById("time-options");

    serviceOptions.innerHTML = "";
    timeOptions.innerHTML = "";

    let timeOptionsHTML = `
        <label>Select Time:</label>
        <select id="time" onchange="calculateTotal()">
            <option value="3h">3 Hours</option>
            <option value="6h">6 Hours</option>
            <option value="12h">12 Hours</option>
            <option value="1d">1 Day</option>
        </select>
    `;

    timeOptions.innerHTML = timeOptionsHTML;
    calculateTotal();
}

function calculateTotal() {
    const serviceType = document.getElementById("service-type").value;
    const time = document.getElementById("time").value;
    const quantity = document.getElementById("quantity").value;

    const pricePerUnit = prices[serviceType][time];
    const totalPrice = pricePerUnit * quantity;

    document.getElementById("price-value").innerText = totalPrice.toLocaleString();
}

document.addEventListener("DOMContentLoaded", () => {
    updateService();
});

function bookNow() {
    const serviceType = document.getElementById("service-type").value;
    const time = document.getElementById("time").value;
    const quantity = document.getElementById("quantity").value;
    const totalPrice = document.getElementById("price-value").innerText;

    const message = `Hi, I would like to book the following service:\nService: ${serviceType}\nTime: ${time}\nQuantity: ${quantity}\nTotal Price: ${totalPrice} IDR`;
    const whatsappUrl = `https://wa.me/6281808151558?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    updateService();
});

function bookNow1() {

    const message = `Hi, I would like to book...`;
    const whatsappUrl = `https://wa.me/6281808151558?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    updateService();
});

function myFunction() {
    alert("Your question has been sent");
  }