# Frontend Test Challenge
- :es: [README en Español](README_es.md)

Before we begin, we want to thank you :heart: in advance for any effort and time you dedicate to completing the StubHub International code test. To make the most of your time, we'd like to provide you with some brief guidelines and clarifications.

- By default, we give you one week to complete the test, but there's actually :hourglass: **no time limit**, neither minimum nor maximum. If at any point you need more than a week, feel free to let us know without any obligation :innocent:. All we need to know is **how much time you've dedicated** to complete it.
- If you have any questions or need assistance, you can contact us at any time. We're here to help :wink:.
- We highly value independence and problem-solving skills. If you believe a certain path is the right one, go for it and surprise us :muscle:.
- There is no right or wrong solution; we want to understand your thought process and the steps that led you to your solution.
- If you find a requirement repetitive and feel you're running out of time, you can skip the repetition and share your opinion when delivering the solution.
- Try experimenting with the API we've provided to gain a better understanding of your options.
- Use this Git repository :octocat: to submit your solution to the challenge :pray:. There's no need to create a separate repository.
- Upon completing the test, we would appreciate it if you could answer the questions in [FEEDBACK.md](FEEDBACK.md) :pray:.

## Introduction to the Challenge
StubHub is a platform for buying and selling tickets between individuals. Our users land on our **Home** page (`home.html`) from where they can search for the category for which they want to buy a ticket.

![ba2fpBl.png](https://i.imgur.com/ba2fpBl.png)

When navigating to the **category** page (`category.html`), all events related to that category are displayed.

![ttH2Jya.png](https://i.imgur.com/ttH2Jya.png)

On the **event** page (`event.html`), you can see all the tickets listed for that event.

![rvMJe6Y.png](https://i.imgur.com/rvMJe6Y.png)

Finally, our users have a section to manage their **account** (`account.html`) where they can see the tickets they have listed for sale, although the link to this section is not included in the mockup.

![lsxx6xl.png](http://i.imgur.com/lsxx6xl.png)

Our developers have provided us with an API from which we can retrieve all the StubHub information.
https://fake-tb-api.onrender.com/

## Requirements :open_book:

- Our mockup designers have provided us with designs where all CSS is embedded in the HTML. However, there are many repeated styles, making it challenging to modify the styles of an element. One of the requirements is to organize all these styles into style sheets.

- The StubHub search :mag:, present on the Home page and the category page, searches the available categories in the StubHub API (`/categories`).
    > Complete the functionality to provide typeahead functionality with the different StubHub categories.

- From the category page (`category.html`), you should display the events related to that category (`/categories/1/events`).
    > Complete the functionality to load events corresponding to that category.

- From the event page (`event.html`), you should display the available tickets (`&status=true`) for that event (`/tickets?eventId=71&status=true`).
    > Complete the functionality to load tickets corresponding to that event.

##### In the user section :bust_in_silhouette: (`account.html`):

- All the tickets that the user has listed on StubHub (`/tickets?sellerId=1`) are displayed.

- Tickets can be active or inactive (depending on the `status` they have, see the API response :information_source:), and this should be visually reflected so that the user is aware of the status of each ticket.

- Our users can activate or deactivate their tickets, and while this is not stored in the backend, the actions should be visually reflected in the list of tickets the user is viewing.

- Our users can duplicate and delete their tickets for sale, once again, this is not stored in the backend, but it should be visually reflected in the list of tickets the user is viewing.

## What We Need :eyes:
- We need you to adapt the code provided by our mockup designers.
- You can split the code into as many HTML, CSS, or JS files as you need and consider necessary for the test development.
- You should combine the layout with the functionality requested in the requirements.
- You can use CSS and JS frameworks as needed; just remember to use the right tool for each problem.
- All events and tickets shown in the HTML we provide are static, which is why we've given you an API to make these data dynamic.

## Extra Mile :trophy:
- Tests are always welcome :white_check_mark:.
- Any improvement on the provided instructions is appreciated.
- We provide basic CSS; see if you can update it with cutting-edge technologies.
- We pay attention to good use of Git :octocat:, as it's a tool we use daily for teamwork.
- Do something that surprises us. Tip: _It doesn't have to be complex to implement, but it should make you stand out from the others_.
- At StubHub, we pay great attention to detail :eyes:. Good architecture, the use of patterns, and the right technologies matter. Keep that in mind. We're particularly interested in the "how."
- Remember that the solution you provide should not only work; we want to see your strengths and discover what you can contribute :D.
