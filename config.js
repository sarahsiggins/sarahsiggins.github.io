window.PortfolioConfig = {
  name: 'Sarah Siggins', 
  jobTitle: 'Portfolio Analyst and Data Science Student',
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
      // description: 'Analyzed King County housing data and built predictive models using R to estimate housing prices.',
      overview: `This project analyzes residential housing data from King County, Washington to understand the factors that drive home prices and to predict whether a home can be classified as good quality. Using real-world housing data, we apply statistical modeling techniques in R, with a focus on interpretability, diagnostics, and model evaluation.

The project has two primary goals:

- Predict home sale prices using multiple linear regression
- Classify homes as good quality or not using logistic regression

The analysis emphasizes careful data cleaning, exploratory data analysis (EDA), model selection, and validation.`
    },
    {
      name: 'Disaster Relief: Blue Tarp Detection',
      link: 'https://github.com/sarahsiggins/disaster-relief-blue-tarps',
      overview: `This project applies statistical learning and machine learning techniques to classify aerial image pixels as either Blue Tarp or Non-Tarp, supporting humanitarian disaster relief efforts in post-earthquake Haiti. Using RGB color values, the analysis identifies temporary shelters and helps prioritize aid distribution.

The project has three main objectives:

- Apply baseline models (Logistic Regression, LDA, QDA) and evaluate their performance
- Tune advanced machine learning models (KNN, Random Forest, Gradient Boosting, SVMs) for improved detection
- Optimize classification thresholds to maximize the F-measure and reduce false negatives

The analysis emphasizes reproducible workflows in R, careful metric selection for imbalanced data, model evaluation on holdout regions, and practical considerations for real-world disaster response.`
    },
    {
      name: 'Monte Carlo Dice Simulator',
      link: 'https://github.com/sarahsiggins/monte-carlo-dice-simulator',
      overview: `This project develops a Python package for simulating dice games using Monte Carlo methods. Users can create dice with custom faces and weights, run multi-dice games with hundreds or thousands of rolls, and analyze outcomes using jackpots, face counts, combinations, and permutations.\n\nThe project demonstrates object-oriented design, reproducible simulations, and data analysis in Python. Key learning objectives include building reusable classes (Die, Game, Analyzer), implementing weighted random sampling, and aggregating results with pandas for probability analysis and experimentation.`
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
