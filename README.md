# DNBase - your line library

One stop solution to keep track of your genetic lines. No more copy/pasting from excel sheets, or accidental deletes!

Access the live version [here](https://dnbase.netlify.com).
***Note: Supabase puts the database to "sleep" when not in use for a while. Since the app depends on Supabase to run, link might not work.***

## Description

The app aims to be a library where users are able to store their data of genetic lines used in their various experiments. It will store a list of active lines that the user is currently working on and a list of archived lines. This makes updating ethics application and collaborations in laboratories that use genetic lines more seamless.

### Tech Used

ReactJS, Supabase (Database, API), CSS, HTML

### User Stories

User will be greeted by dashboard with a summary of lines that are currently active/archived. They will be able to add a new line from this page.

After adding line, new data will be added into "Active Lines" page, where the current lines that are in use will be listed.

Once no longer in use, user can click on "Delete" to remove the line from the list. They are also able to add a new line at the bottom of the table from the Active Lines page.
