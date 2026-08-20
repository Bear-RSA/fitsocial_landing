# Meal plan PDFs

Drop your meal plan PDF files in this folder. That's it — no code changes needed.

The site picks up every `.pdf` in here automatically and shows it as a download
card on the landing page, and as a download button in the email.

## Naming

The filename becomes the title shown to users, so name them readably:

    student-budget-meal-plan.pdf   ->  "Student Budget Meal Plan"
    Working Week Plan.pdf          ->  "Working Week Plan"

To control the order they appear in, prefix with a number (the number is
stripped from the displayed title):

    01-student-budget.pdf
    02-working-week.pdf
    03-lean-bulk.pdf

Non-PDF files in this folder are ignored.
