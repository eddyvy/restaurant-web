# Restaurant

## Introduction

A restaurant web to have as a template for restaurants who want to have available a web to show information, pictures and have a booking and delivery modules to be used by users.

## Brainstorming

![image-20210620094258477](C:\Users\usuario\AppData\Roaming\Typora\typora-user-images\image-20210620094258477.png)

## Functionalities

- **Expose information**
- **Authenticate**
- **Book a table**
- **Update agenda**
- **Order ( additional )**

## Requirements

The users are the owner of the restaurant and their clients. The owner will be referenced as the admin.


### Expose information

#### User requirements

1. Pages of HOME, MENU, BOOKING, ABOUT, CONTACT additionally - ORDERS
2. Header with navbar to navigate the different pages and logo
3. Footer with essential contact information and logo
4. Feedback to know in what page the user is
5. Language options at the header
6. Animations to improve UX
7. Google maps integration with location info
8. Access to the menu in PDF
9. Contact media with social networks links
10. Phone numbers jumps to phone applications once clicked by phone

#### System and software requirements

1. Flexible content edition (to swap languages or change it)
2. Loading screen and loading feedbacks when needed
3. Links without reloading/refreshing the site
4. Responsive design
5. SEO only needed at the index

### Authenticate

#### User requirements

1. Only needed for admin
2. Needed to access a link with admin functionalities

#### System and software requirements

1. Registration using the backend and database
2. Use of tokens to maintain the access
3. Login screen only, not register screen

### Book a table

#### User requirements

1. Requires the client to select number of people for the table
2. Requires the client to select date and hour between options
3. Requires the client to submit a form with name, email and number
4. The client is advised that must receive an email if the booking is confirmed
5. The client receives an email of confirmation
6. The client can pick a table in a map (additional)

#### System and software requirements

1. The backend can hold a lot of petitions at the same time
2. Can't be a table booked for 2 clients at the same time
3. It must send an email to the client and optionally to the admin
4. Requires the admin to receive a notification at the agenda


### Update agenda

#### User requirements

1. The admin can look the agenda in days, weeks, months
2. The admin can edit bookings
3. The admin can block further bookings
4. The admin can choose the time it is allowed for clients to book
5. The agenda is automatically updated with client bookings
6. The booking information can be extended by clicking

#### System and software requirements

1. If a booking is deleted it requieres confirmation and notification via email to client
2. The slots for booking and showing information will be setted to half an hour
3. Time calculations are in hours


### Order ( additional )

#### User requirements

1. The client has all products displayed and categorized
2. Require add all products desired to the shopping cart
3. Buttons to remove content of the cart
4. Can choose between take-away or delivery
5. Delivery requires more data from the user
6. A delivery time can be chosen (between options)
7. Online payment (additional)
8. Notification of order success

#### System and software requirements

1. The orders appear at the agenda of the admin panel
2. Notification of acceptance to admin and client
3. Require notification to the client via email if denied or error appeared

## Tecnologies to use

- **React JS**
- **Redux**
- **Node JS**
- **Jest**
- **Bulma (css framework)**
