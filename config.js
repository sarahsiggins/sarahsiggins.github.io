window.PorfolioConfig = {
  name: 'Sarah Siggins',
  jobTitle: 'Data Science Student',
  jobDescription: 'Exploring the intersection of data science, finance, and engineering to solve real-world problems.',
  
  // About Me section
  education: 'Masters in Data Science from University of Virginia (Expected Graduation: August 2026), B.S. Chemical Engineering from Virginia Tech, B.S. Business (Finance Major) from Virginia Tech',
  employer: 'Lead Portfolio Investment Analyst at T. Rowe Price',
  aboutImages: [
    { file: 'solo.jpg', alt: 'Solo' },
    { file: 'vt1.jpg', alt: 'Virginia Tech 1' },
    { file: 'vt2.jpeg', alt: 'Virginia Tech 2' }
  ],

  // Projects / Work
  works: [
    {
       name: 'King County Housing Price Modeling',
      link: 'https://github.com/sarahsiggins/king-county-housing-price-modeling-r',
      description: 'Analyzed King County housing data and built predictive models using R to estimate housing prices.',
      overview: `This project analyzes residential housing data from King County, Washington to understand the factors that drive home prices and to predict whether a home can be classified as good quality. Using real-world housing data, we apply statistical modeling techniques in R, with a focus on interpretability, diagnostics, and model evaluation.

The project has two primary goals:

- Predict home sale prices using multiple linear regression
- Classify homes as good quality or not using logistic regression

The analysis emphasizes careful data cleaning, exploratory data analysis (EDA), model selection, and validation.`
    },
    {
      name: 'ToDo App',
      link: 'https://theuselessweb.com/',
      description: 'Esse magna anim incididunt enim sint aute consectetur ipsum id nostrud eu do.'
    },
    {
      name: 'A Mobile Game',
      link: 'https://theuselessweb.com/',
      description: 'Incididunt non cupidatat deserunt ut commodo qui non do Lorem.'
    }
  ],

  // Hobbies / Interests
  hobbies: [
    { name: 'Hiking', description: 'Exploring trails and nature.', image: 'hiking.jpg' },
    { name: 'Running', description: 'Keeping fit and active.', image: 'running.jpg' },
    { name: 'Dog', description: 'Spending time with my dog Bennie.', image: 'bennie.jpeg' },
    
    // Travel as part of hobbies
    { name: 'Germany', description: 'Traveling to Germany.', image: 'germany.jpg' },
    { name: 'Iceland', description: 'Experiencing Iceland.', image: 'iceland.jpeg' },
    { name: 'Utah', description: 'Exploring Utah.', image: 'utah.jpg' },
    { name: 'Hawaii', description: 'Vacationing in Hawaii.', image: 'hawaii.jpeg' }
  ],

  // Contact info
  contacts: {
    email: 'sarahhsiggins@gmail.com',
    mobileNo: '703 424 0840',
    links: [
      { name: 'GitHub', link: 'https://github.com/sarahsiggins' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sarahhsiggins/' },
      { name: 'Resume', link: 'assets/resume/Sarah_Siggins_Resume.pdf' }
    ]
  }
};
