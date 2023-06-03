import { React, useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import './styles.css';

export default function Milestone(props) {
  const [progress, setProgress] = useState(0);

  function handleStepClick(stepNumber) {
    switch (stepNumber) {
      case 1:
        setProgress(3);
        $('.discovery').addClass('active').siblings().removeClass('active');
        break;
      case 2:
        setProgress(25);
        $('.strategy').addClass('active').siblings().removeClass('active');
        break;
      case 3:
        setProgress(50);
        $('.creative').addClass('active').siblings().removeClass('active');
        break;
      case 4:
        setProgress(75);
        $('.production').addClass('active').siblings().removeClass('active');
        break;
      case 5:
        setProgress(100);
        $('.analysis').addClass('active').siblings().removeClass('active');
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <section className="process">
        <h1>Our Process</h1>
        <div className="process-wrapper">
          <div id="progress-bar-container">
            <ul>
              <li className="step step01 active" onClick={() => handleStepClick(1)}>
                <div className="step-inner">STAGE 1</div>
              </li>
              <li className="step step02" onClick={() => handleStepClick(2)}>
                <div className="step-inner">STAGE 2</div>
              </li>
              <li className="step step03" onClick={() => handleStepClick(3)}>
                <div className="step-inner">STAGE 3</div>
              </li>
              <li className="step step04" onClick={() => handleStepClick(4)}>
                <div className="step-inner">STAGE 4</div>
              </li>
              <li className="step step05" onClick={() => handleStepClick(5)}>
                <div className="step-inner">STAGE 5 YAYYYYYY</div>
              </li>
            </ul>

            <div id="line">
              <div id="" style={{ width: `${progress * 20} %` }}></div>
            </div>
          </div>

          <div id="progress-content-section">
            <div className="section-content discovery active">
              <h2>STAGE 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non
                fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper
                ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros.
                Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
                condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio,
                venenatis at ex a, lacinia suscipit orci.</p>
            </div>

            <div className="section-content strategy">
              <h2>STAGE 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non
                fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper
                ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros.
                Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
                condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio,
                venenatis at ex a, lacinia suscipit orci.</p>
            </div>

            <div className="section-content creative">
              <h2>STAGE 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non
                fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper
                ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros.
                Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
                condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio,
                venenatis at ex a, lacinia suscipit orci.</p>
            </div>

            <div className="section-content production">
              <h2>STAGE 4</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non
                fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper
                ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros.
                Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
                condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio,
                venenatis at ex a, lacinia suscipit orci.</p>
            </div>

            <div className="section-content analysis">
              <h2>STAGE 5</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non
                fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper
                ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros.
                Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et
                condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio,
                venenatis at ex a, lacinia suscipit orci.</p>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}
