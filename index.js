import { journalEntries } from "./data-journal-entries.js"

const featuredPostEl = document.getElementById('featured-post')
const frontPageCardDisplayEl = document.getElementById('front-page-card-display')
const recentPostsDisplayEl = document.getElementById('recent-posts-display')
const journalEntryPage = document.getElementById('journal-entry-page')

let numberOfViewMore = 3
addEventListener('click', (e) => {
    if (e.target.id === 'recent-posts-view-btn') {
        numberOfViewMore += 2
        renderJournalCardsInside(recentPostsDisplayEl, numberOfViewMore)
    }
    else if (e.target.dataset.journalEntryId) {
        localStorage.setItem("journalSelectionId", e.target.dataset.journalEntryId)
    }
})

function renderJournalCardsInside(displayElement, numberOfCards) {
    let html = ''
    if (displayElement === featuredPostEl) {
        const firstEntry = journalEntries[0]
        html += `
        <a href="pages/journalentry.html" class="featured-post-link">
            <div class="featured-post_image-wrapper" id="featured-post">
                <img src="${firstEntry.img}" class="featured-post_image" id="featured-post" data-journal-entry-id="${firstEntry.id}">
            </div>
            <div class="featured-post_details" id="featured-post">
                <p class="date" id="featured-post" data-journal-entry-id="${firstEntry.id}">${firstEntry.date}</p>
                <h1 id="featured-post" data-journal-entry-id="${firstEntry.id}">${firstEntry.title}</h1>
                <p class="subtext" id="featured-post" data-journal-entry-id="${firstEntry.id}">${firstEntry.summary}</p>
            </div>
        </a>
        `
    } else if (displayElement === frontPageCardDisplayEl) {
        journalEntries.splice(numberOfCards, journalEntries.length).forEach(entry => {
            html += `
            <div class="journal-card">
                <a href="pages/journalentry.html">
                    <img src=${entry.img}" data-journal-entry-id="${entry.id}">
                    <div class="journal-card_details">
                        <p data-journal-entry-id="${entry.id}">${entry.date}</p>
                        <h2 data-journal-entry-id="${entry.id}">${entry.title}</h2>
                        <p data-journal-entry-id="${entry.id}">${entry.summary}</p>
                    </div>
                </a>
            </div>
            `
        })
    } else if (displayElement === journalEntryPage) {
        const journalEntry = journalEntries[localStorage.getItem('journalSelectionId')]

        html += `
        <div class="journal-entry-focus">
            <p>${journalEntry.date}</p>
            <h1>${journalEntry.title}</h1>
            <p>${journalEntry.summary}</p>
        </div>
        <div class="featured-post_image-wrapper">
            <img src="${journalEntry.img}" class="featured-post_image">
        </div>
        <div class="wat">
            <h2>How I stay committed to learning</h2>
            <p>Qui laboris laborum dolor nulla minim. Et duis irure eu cupidatat elit. Id et ea sit adipisicing cupidatat
                ipsum incididunt eiusmod duis dolor nisi veniam. Tempor ex deserunt velit dolor.</p>
            <h2>How I got started</h2>
            <p>Id voluptate officia nisi ut reprehenderit commodo. Sit proident esse ut qui ea sint officia consequat esse
                nisi exercitation ipsum irure dolor. Eu ea voluptate occaecat qui culpa laboris laborum mollit commodo
                veniam veniam eu consectetur. Exercitation aliqua anim irure enim eiusmod duis reprehenderit proident sit eu
                ipsum. Dolor ex cillum minim incididunt qui non Lorem enim dolore dolore. Occaecat eiusmod nostrud nostrud
                exercitation esse ad ullamco aliquip officia non.</p>
        </div>
        `
    } else if (displayElement === recentPostsDisplayEl) {
        journalEntries.slice(0, numberOfViewMore).forEach(entry => {
            html += `
            <div class="journal-card">
                <a href="/pages/journalentry.html">
                    <img src=${entry.img}" data-journal-entry-id="${entry.id}">
                    <div class="journal-card_details">
                        <p data-journal-entry-id="${entry.id}">${entry.date}</p>
                        <h2 data-journal-entry-id="${entry.id}">${entry.title}</h2>
                        <p data-journal-entry-id="${entry.id}">${entry.summary}</p>
                    </div>
                </a>
            </div>
            `
        })
    }

    displayElement.innerHTML = html
}

// RENDER DISPLAY ELEMENTS

if (featuredPostEl) {
    renderJournalCardsInside(featuredPostEl)
}

if (frontPageCardDisplayEl) {
    renderJournalCardsInside(frontPageCardDisplayEl, 1)
} else if (recentPostsDisplayEl) {
    renderJournalCardsInside(recentPostsDisplayEl)
}

if (journalEntryPage) {
    renderJournalCardsInside(journalEntryPage)
}