# Curriculum - React Inline Styling Project

This repository contains the project for the React Inline Styling specialization within the curriculum. The project focuses on enhancing your skills in front-end development using JavaScript, ES6, and React, while exploring concepts such as inline styling, CSS-in-JS with Aphrodite, conditional styling, responsive design, and animations.

## Short Specializations Overview

- **Project:** React Inline Styling
- **Average:** 103.14%
- **Weight:** 1

## Project Details

### Project Timeline

- Project Start: Aug 7, 2023, 6:00 AM
- Project End: Aug 9, 2023, 6:00 AM
- Checker Release: Aug 7, 2023, 6:00 PM
- Manual QA Review: Request upon project completion
- Auto Review: Will be launched at the deadline

### Learning Objectives

By completing this project, you will gain proficiency in the following areas:

- Understanding the differences between using a CSS file and inline styling
- Utilizing a CSS-in-JS tool like Aphrodite
- Applying conditional styling using JavaScript
- Implementing responsive design to adapt UI for different screen sizes
- Creating small animations within your application

### Resources

To successfully complete this project, make sure to read or watch the following resources:

- Aphrodite
- Inline styling
- Enzyme Render
- Enzyme Prop
- CSS Viewport
- CSS Media queries
- CSS Animations

## Project Tasks

### Task 0: Inline Styling

- Copy over the task_5 directory from the 0x04. React components project and rename it to task_0.
- Modify the CourseListRow component in task_0/dashboard/src/CourseList/CourseListRow.js:
  - Apply inline styling to change the background color of a row to #f5f5f5ab.
  - Apply inline styling to change the background color of a header row to #deb5b545.
- Update tests to ensure they pass with the new styles.

### Task 1: Install Aphrodite

- Install Aphrodite using npm: `npm install --save aphrodite`.
- Modify various components (App, BodySectionWithMarginBottom, CourseList, Header, Login, Notifications) to use Aphrodite for styling.
- Define styling within the JavaScript files and remove corresponding CSS files.
- Ensure test suites remain passing with the inline styling.

### Task 2: Conditionally Applying Style

- Modify the NotificationItem component to use Aphrodite for styling.
- Define styling for urgent and default items using conditions.
- Modify the NotificationItem test suite to ensure tests still pass.
- Modify the CourseListRow component to use Aphrodite for styling.
- Define styling for different types of rows and th elements.
- Update the CourseListRow test suite to validate that tests still pass.

### Task 3: Responsive Design

- Make the application responsive for large screens and screens under 900px width.
- Modify the Login component to arrange labels, inputs, and buttons appropriately.
- Modify the Notifications component to take over the entire screen when open, adjust font size, and remove padding.
- Modify the NotificationItem component to occupy the entire screen width, add a black border, and adjust padding.

### Task 4: Animation

- Implement animations for Notifications menu hover and new notifications.
- Create CSS animation frames for opacity change and bouncing effect.
- Modify the styling for the menu item to float over the screen and animate on hover.
- Hide the menu item when the list of notifications is visible.

## Copyright

&copy; 2023 ALX. All rights reserved.
