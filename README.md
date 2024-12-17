Dependencies:

1. NextJS
2. TypeScript
3. TailwindCss

Takeaway from the project.

- Use clsx() for styling as it gives flexibility to add conditional classNames.
- Use tailwind-merge for merging tailwind classes with clsx()

=> Combining both clsx and tailwind-merge help to create a new cn() function for conditional rendering

- Tailwind config file helps to keep style code clean, rather than defining everything in .css file just define in the config file, but you need to specify all the classNames in the container or div in jsx

- Various libraries such as animated-cursor and water wave and other can be integrated to make a beautifull app

- Creating the reusable UI/Button prehand can save a lot of time