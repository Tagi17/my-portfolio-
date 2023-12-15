import html2canvas from 'html2canvas';

const HtmlCanvas = () => {
  // Function to calculate the dominant color
  const getDominantColor = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');
    if (!context) {
        return 'rgba(255, 255, 255, 0.5)'; // Default color or handle the error
      }
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let r = 0, g = 0, b = 0;

    for (let i = 0, l = imageData.length; i < l; i += 4) {
      r += imageData[i];
      g += imageData[i + 1];
      b += imageData[i + 2];
    }

    r = Math.floor(r / (imageData.length / 4));
    g = Math.floor(g / (imageData.length / 4));
    b = Math.floor(b / (imageData.length / 4));

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Function to update the navbar's color
  const updateNavbarColor = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      html2canvas(element).then(canvas => {
        const dominantColor = getDominantColor(canvas);
        // Assuming your navbar has an id of 'navbar'
        const navbar = document.getElementById('navbar');
        if (navbar) {
          navbar.style.backgroundColor = dominantColor;
        }
      });
    }
  }

  return { updateNavbarColor };
}

export default HtmlCanvas;
