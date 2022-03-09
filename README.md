# Sooper Beers
>A simple beers catalogs 

This web-site was created to show a list of beers, enjoy the project.

![](public/home_page.png)	


## Instalation 	

Go to project terminal and run the code below 	

```sh	
yarn install	
```	

After all dependecies installed	

**To run**	

```sh	
yarn dev 	
```	

## Features
- [ReactJs](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Less](http://lesscss.org/)
- [Eslint](https://eslint.org/)
- [prettier](https://prettier.io/)


## Project structure
```
.

├── src/
|   ├── components/                 # all components of project
|   |   ├── Layout/                  
|   |   |   ├── index.tsx           # define the main structure of the project
|   |   |   ├── styles.less         # styling of components
|   |   ├── Nav/
|   |   |   ├── helpers/
|   |   |   |   ├── index.ts        # functions and vars used in nav    
|   |   |   ├── LeftMenu/           
|   |   |   |   ├── index.ts        # left nav bar components
|   |   |   |   ├── index.less      # styling of component
|   |   |   ├── RigthMenu/
|   |   |   |   ├── index.ts        # right nav bar components
|   |   |   |   ├── index.less      # styling of component
|   |   |   ├── index.tsx           # component that allows browse the pages 
|   |   |   ├── styles.less           # styling of components
|   |   ├── List      
|   |   |   ├── index.tsx           # component that allows the listing of beers
|   |   |   ├── styles.less         # styling of components
|   |   ├── Card/              
|   |   |   ├── index.tsx           # card that shows beer information
|   |   |   ├── styles.less           # styling of components
|   |   ├── ListTrending
|   |   |   ├── helpers/
|   |   |   |   ├── slider.ts       # slider settings 
|   |   |   ├── index.tsx           # component that allows the listing of trending anime
|   |   |   ├── styles.less         # styling of components
|   |   ├── Form/             
|   |   |   ├── index.tsx           # ca simple form to input new beer
|   |   |   ├── styles.less         # styling of components
|   |   ├── Pagination/
|   |   |   ├── index.tsx           # component that lets you page beers results      
|   ├── pages/                      # all project pages.
|   |   ├── \_app.tsx               
|   |   ├── \_document.tsx          
|   |   └── index.tsx               # index page
|   |   └── new.tsx                 # page to input a new beer
|   ├── context/                    # global states
|   |   └── search.tsx                   
|   |   └── beer.tsx                       
|   ├── services/                   # all project external services
|   |   └── api.ts                  # axios elements initilized to call external resources
|   |   └── index.ts                # list of function to call api
|   ├── styles/                     # all project pages.
|   |   ├── pages/         
|   |   |   └── Home.less              
|   |   └── global.less             # global style of project 
|   |   └── theme.less              # project theme
|   ├── utils/                      # all project utils.
|   |   ├── debounce.ts
|   ├── types/                      # all project types.
|   |   ├── debounce.ts
├── README.md
└── ...
```

## Meta	

Author - Lutero Elavoco

programmer -  [Lutero Elavoco](https://www.linkedin.com/in/l%C3%BAtero-elavoco-5951b619b/) - luteroelavoco90@gmail.com	

https://sooper-beer.vercel.app/

## Contributing 	

1. Fork it (https://github.com/luteroelavoco/sooper-beer)	
2. Create your feature branch (`git checkout -b feature/fooBar`)	
3. Commit your changes (`git commit -am 'Add some fooBar'`)	
4. Push to the branch (`git push origin feature/fooBar`)	
5. Create a new Pull Request
