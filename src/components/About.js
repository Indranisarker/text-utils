import React from 'react'

export default function About(props) {
  return (
    <div className='container'>
    <div className='container my-5'>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <h1 className={`container my-3 text-${props.mode === 'light'?'dark' : 'light'}`}>About Us</h1>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Welcome to TextUtils, your go-to tool for quick and easy text analysis! Whether you're looking to convert text to uppercase or lowercase,
         count words and characters, or even measure how frequently each word appears, quickly copy the processed text to your clipboard with a single click. Also, stay informed with alert messages after every action to ensure you're always in control. 
         It's designed to make your text processing tasks effortless and efficient.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">TextUtils is completely free to use. There are no hidden charges or premium versions – just pure, simple text analysis at your fingertips.
         Whether you're a student, writer, or just someone who needs to handle text daily, TextUtils offers you powerful features without any cost.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Worried about compatibility? Don’t be! TextUtils works seamlessly across all modern web browsers. Whether you're using Chrome, Firefox, Safari, or Edge, you can rely on TextUtils to function perfectly, giving you a smooth and hassle-free experience.</div>
    </div>
  </div>
</div>
</div>
</div>
  )
}
