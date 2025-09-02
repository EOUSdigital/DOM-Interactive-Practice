"use strict";

const dm = document.getElementById('dm');
if (dm) {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('dm');                   // "1" | "0" | null
    dm.checked = saved ? saved === '1' : preferDark;            // set initial state

    dm.addEventListener('change', () => {
        localStorage.setItem('dm', dm.checked ? '1' : '0');     // persist choice
    });
}

//TODO  Practice Block — DOM Lesson 01 (You do it)

//* Ground rules (for every task)
//  • Use Console only.
//  • Prefer querySelector/All, firstElementChild/nextElementSibling.
//  • Don’t use innerHTML (unless a task explicitly says “trusted HTML” — today none do).
//  • If something fails, post exactly what you typed and the message you saw.

//? A. Select & Scope (5–7 min)

//  Task A1: Select the first <h1> (or first heading on the page) and confirm it exists.
//  Accept: Console shows the element (not null).
//  Hint if stuck: Search for a generic heading selector first.

//  Task A2: Count how many links are inside the <nav> only.
//  Accept: You get a number (not all links on the page).
//  Hint if stuck: Select the nav first, then query inside it.

//  Task A3: Select all product cards and log how many there are.
//  Accept: The count should match what you see (you said 9 previously).
//  Hint if stuck: Cards have a class and a data-id.

//? B. Traverse (5–7 min)

//  Task B1: Starting from the element with class .current in the menu, add a class neighbor to its previous and next element siblings.
//  Accept: Both neighbors visibly change (outline or style if you set it in CSS).
//  Hint if stuck: Previous/next have “Element” in the property names.

//  Task B2: From the card with data-id="2", climb to the grid container and mark the first and last card with classes edge-first and edge-last.
//  Accept: First and last cards visibly marked.
//  Hint if stuck: Use closest to reach the grid.

//  Task B3 (mini-debug): Verify that the grid contains the card with data-id="3".
//  Accept: You see true in the Console.
//  Hint if stuck: There’s a built-in method that answers “does A contain B?”

//? C. Create & Insert (7–10 min)

//  Task C1: Add a new paragraph at the very end of the page body with the exact text:
//  Added at the end.
//  Accept: The paragraph appears at the bottom.
//  Constraints: Use createElement + safe text API.
//  Hint if stuck: End-of-container insertion method has the same name as the array method.

//  Task C2: Add a paragraph at the very top of the page body with the exact text:
//  Added at the top.
//  Accept: It appears above everything else inside <body>.
//  Hint if stuck: The symmetrical method to C1 but at the start.

//  Task C3: After the first heading you selected in A1, insert a new <em> that displays exactly Hot.
//  Accept: The <em> shows right after the heading.
//  Constraints: Build nodes with DOM methods; no innerHTML.
//  Hint if stuck: Create, set text, then place it with a sibling method.

//  Stretch C4 (optional): Clone that <em> and put the clone before the same heading.
//  Accept: You see Hot on both sides of the heading.
//  Hint if stuck: Cloning requires a specific method with a boolean for “deep”.

//? D. Attributes, Classes, Data, Styles (5–7 min)

//  Task D1: For every card with an even data-id, add a class selected.
//  Accept: Even cards are visibly marked (use a .selected style in your CSS if you want).
//  Hint if stuck: Convert dataset.id to a number and test with %.

//  Task D2: On the featured card (it has a matching class), append a small badge element that reads Featured.
//  Accept: The badge appears inside the featured card, once.
//  Constraints: Create with DOM methods; ensure you don’t add duplicates if you re-run.
//  Hint if stuck: Check if a .badge already exists before appending.

//  Task D3: On the grid container, set a data attribute data-count to the number of element children it currently has.
//  Accept: Reading that data-count shows the correct number.
//  Hint if stuck: There’s a property that counts element children only.

//? E. Text vs Visible Text (2–3 min)

//  Task E1: Hide one card (any) using a class, not inline styles. Then compare the length of the container’s textContent and innerText.
//  Accept: The innerText length should be smaller.
//  Constraints: Add a .hidden { display:none } rule if you don’t have one.
//  Hint if stuck: Assign the class, then read both properties and compare.

//! Solution

//  A1. 
document.querySelector('h1');                           //  <h1 class="title">

//  A2. 
document.querySelectorAll('nav a').length;              //  3

//  A3. 
document.querySelectorAll('[data-id]').length;          //  9

//  B1. 
const current = document.querySelector('.current');
current?.previousElementSibling?.classList.add('neighbor');
current?.nextElementSibling?.classList.add('neighbor');

//  B2. 
const median = document.querySelector('[data-id="2"]');
const grid = median?.closest('.grid');
const firstCard = grid?.querySelector('.card:first-child');
const lastCard = grid?.querySelector('.card:last-child');
firstCard?.classList.add('edge-first');
lastCard?.classList.add('edge-last');

//  B3. 
let grid2 = document.querySelector('.grid');
let card = document.querySelector('[data-id="3"]');
const isContained = grid2.contains(card);

//  C1. 
const paragraph = document.createElement("p");
paragraph.textContent = "Added at the end";
document.body.append(paragraph);

//  C2. 
const note = document.createElement("p");
note.textContent = "Added at the top.";
document.body.prepend(note);

//  C3. 
const h1 = document.querySelector('h1') || document.body.firstElementChild;
const em = document.createElement('span');
em.textContent = 'Hot';
h1?.after(em)

//  C4.
const copy = em.cloneNode(true);
h1?.before(copy);

//  D1. 
const evenDataCard = document.querySelectorAll('[data-id]');
evenDataCard.forEach(element => {
    if (Number(element.dataset.id) % 2 === 0) {
        element.classList.add("selected");
    }
});



//  D2. 
//  D3. 

//  E1. 


























