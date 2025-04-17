import { useState } from 'react'
import './App.css'
import './style.css'

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function Accordion({data}) {
  return (
    <div className='accordion'>
      {data.map((item, index) => (
        <AccordionItem key={index} number={index + 1} title={item.title} text={item.text} />
      ))}
    </div>
  )
}
function AccordionItem({number, title, text}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`item ${expanded ? "open" : ""}`} onClick={()=>setExpanded(!expanded)}>
      <p className='number'>{number}</p>
      <p className='title'>{title}</p>
      <p className='icon' >{expanded ? '-' : '+'}</p> 
      <div className='content-box'>{expanded ? `${text}`:``}</div>
    </div>
  )
}
function App() {

  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )
}

export default App
