import React from "react";
import "./styles.css";
import Ministry from "./../../layouts/Ministry";
import bgImg from "../../assets/webp/men_group.webp";
import ministryImg from "../../assets/webp/pexels-jacob-morch-426976.webp";

function Men() {
  return (
    <Ministry
      headerText="Men Ministry (MMV)"
      ministryImage = {ministryImg}
      bodyTitle="The Mighty Men of Valor (MMV) is the Men's Ministry of the Joy
    Temple"
      headerBg={bgImg}
    >
      <ul>
        <li>
          Eiusmod mollit amet est qui deserunt culpa minim consectetur nisi
          adipisicing. Elit proident culpa nisi exercitation et ullamco nostrud
          eu. Et excepteur cillum Lorem velit consequat excepteur nulla est qui
          amet nulla minim officia. Elit occaecat ad qui dolor labore esse amet
          ipsum velit. Aliqua amet amet occaecat sint nulla. Enim adipisicing
          exercitation do nulla et tempor eu dolor qui esse anim.
        </li>
        <li>
          Velit sunt ullamco esse dolore sint in ad fugiat proident in
          consectetur culpa mollit. Culpa cillum eiusmod ea dolore ea sunt minim
          magna ipsum proident cupidatat. Excepteur ad non enim aute. Minim non
          cupidatat irure occaecat deserunt anim commodo voluptate. Do pariatur
          labore elit mollit qui.
        </li>

        <li>
          Nostrud sit occaecat duis ad ea enim. Id incididunt eu est ut aliqua
          occaecat sunt irure minim. Cupidatat irure anim aliqua minim veniam
          nisi tempor ut aliqua consectetur proident enim cillum quis. Proident
          consequat consequat cupidatat labore ea ipsum ad ut aliqua. Laborum
          deserunt ullamco pariatur veniam ut aliqua magna ullamco est irure
          sint laborum aliquip mollit. Occaecat officia in proident dolor
          cupidatat ullamco irure sint Lorem proident. Sit in proident dolore
          reprehenderit sit dolor laboris qui ex laborum commodo laboris
          occaecat fugiat.
        </li>
        <li>
          Mollit ea adipisicing consequat aliqua duis laborum tempor ex qui.
          Pariatur duis irure do tempor eiusmod elit Lorem amet incididunt.
          Commodo Lorem id duis labore ut irure et exercitation ad nisi enim
          occaecat anim sunt.
        </li>
      </ul>
    </Ministry>
  );
}

export default Men;
