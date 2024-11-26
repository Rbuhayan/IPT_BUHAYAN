function increaseFontSize() {
    const paragraph = document.getElementById("text");
    let currentSize = parseFloat(window.getComputedStyle(paragraph, null).getPropertyValue("font-size"));
    paragraph.style.fontSize = (currentSize + 2) + "px";
}

function decreaseFontSize() {
    const paragraph = document.getElementById("text");
    let currentSize = parseFloat(window.getComputedStyle(paragraph, null).getPropertyValue("font-size"));
    paragraph.style.fontSize = (currentSize - 2) + "px";
}

function calculateMDAS() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert("Please enter all the numbers correctly.");
        return;
    }

    const result = num1 + (num2 * num3) / num4 - num5;

    document.getElementById("result").innerText = result.toFixed(2);
}
