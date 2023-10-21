<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ManSangSin/Rhythm-Code">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Rhythm Code</h3>

  <p align="center">
desc
<br />
<a href="https://github.com/ManSangSin/Rhythm-Code"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/ManSangSin/Rhythm-Code">View Demo</a>
·
<a href="https://github.com/ManSangSin/Rhythm-Code/issues">Report Bug</a>
·
<a href="https://github.com/ManSangSin/Rhythm-Code/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)
We are building a unique and interactive multimedia map website that serves as a visual representation of the diverse and complex rhythms originating from various geographical locations. This innovative website aims to cater to both curious listeners and experienced rhythm enthusiasts by providing a user-friendly platform to explore, interact with, and learn about the various rhythms from around the world.

To ensure the website's technical functionality, we will employ the following technologies:

Frontend: React for building a dynamic and responsive user interface.
Backend: Node.js and Express for implementing a robust and efficient server-side framework.
Database: PostgreSQL for securely storing and managing the website's data.
Hosting: Render for seamlessly deploying and hosting the website on the cloud.

By leveraging these cutting-edge technologies, the Our Rhythms team will be able to create a captivating and engaging online experience that caters to the specific needs and interests of rhythm aficionados worldwide. Users will be able to interact with the website in a variety of ways, such as:

Exploring an interactive multimedia map that visualizes the origins of different rhythms.
Clicking on markers/pins on the map to view a list of related rhythms.
Clicking on individual rhythms to access a modal that displays relevant media content and additional information.
With a responsive design that works seamlessly on both mobile and desktop layouts, the Our Rhythms website will cater to a diverse audience and ensure an optimal user experience, regardless of the device or platform being used.

By harnessing the power of the internet and the wealth of knowledge available online, the Our Rhythms team aims to create a truly revolutionary website that serves as a dynamic and comprehensive platform for exploring, learning about, and appreciating the diverse and fascinating world of rhythms

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Postgres][Postgres]][Postgres-url]
- [![Node][Node.js]][Node-url]
- [![Docker][Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->


## Getting Started

To get a local copy up and running follow these simple steps.



### Prerequisites

The following list of things are required to use the software:

- npm
  ```sh
  npm install npm@latest -g
  ```
- Docker



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ManSangSin/Rhythm-Code.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env at the root of repo
4. Enter database url in .env

```sh
DB_URL = "postgres://postgres:opensesame@localhost:5432/cyf"
```

5. You are ready to run the project locally



### Running the project locally

To Start:

1. Start Docker Desktop (or Docker Engine)
2. Run npm startup script

```sh
   npm run dev
```

3. Open your browser and go to localhost

```sh
  http://localhost:3000/
```

To Stop:

1. Send SIGINT signal

```sh
  ctrl + c
```

2. Run npm shutdown script for Docker (Docker needs to be stopped seperately)

```sh
  npm run docker:stop
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The seed file, "build-rhythms.sql", will contain the data necessary to populate the PostgreSQL database with information on each rhythm code. The data will be stored in a table named "rhythms" with columns for id, title, url, and location.

To deploy the local SQL database, we will use a standalone Docker container. Docker Desktop will be required to run the Docker container.

To add a new marker location to the map, the x and y data for the desired location must be obtained. This data is relative to the SVG map plane and will be used to plot the new marker.

The process of finding the id of a specific dot on the map will involve inspecting the website's source code using the browser's developer tools. The id is then used to populate the "map_id" field in the rhythm_codes table. The following set of instructions will walk you through the process.

Adding a new marker location to the map:

1. The markers are plotted inside a svg therefore the x and y data required to plot the markers needs to be relative to the svg map plane
2. Each dot on the map is an individual element and holds its own x and y data which is relative to the map (and also holds other data such as id)
3. We will use this data to plot the new marker
4. A query selector is used with the id to get the data of the specific dot we want our marker to be placed on, which is then parsed using a regex to retrieve the relevent data (x and y)
6. This is already setup provided a map_id (id of the dot) is stated.


Finding id of specific dot:

1. Open the website homepage and use inspect on your chosen browser
2. Use the select element tool and click over the map area
3. A transparent overlay will be selected called "foreignObject" (the layer which the markers are placed on)
4. This needs to be removed so that the dots under the transparent layer can be selected
5. To remove the layer, right clicking on the elements panel and select "delete element"
6. This is not permenant and the overlay will be reloaded when the page is refreshed
7. Use the select element tool again and now select the dot which you wish to place the new marker on
8. This will show the dot details including the id


Adding id to database:

1. The id is used inside the rhythm_codes table
2. when adding a new row of data, map_id will be set to the id of the dot we want

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/ManSangSin/Rhythm-Code/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

1. Christina Mifsud  - [LinkdIn](https://www.linkedin.com/in/christinamifsud/) - christina.mifsud@gmail.com
2. Delnia Alipour    - [LinkdIn](https://www.linkedin.com/in/delnia-alipour-848b57106/) - delniaalipur@gmail.com
3. Irianni Munoz     - [LinkdIn](https://www.linkedin.com/in/irianni-munoz-693a36164/) - munozirianni@gmail.com
4. Man Sang Sin      - [LinkdIn](https://www.linkedin.com/in/man-sang-sin/) - man.sang.sin@gmail.com

Project Link: [https://github.com/ManSangSin/Rhythm-Code](https://github.com/ManSangSin/Rhythm-Code)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ManSangSin/Rhythm-Code.svg?style=for-the-badge
[contributors-url]: https://github.com/ManSangSin/Rhythm-Code/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ManSangSin/Rhythm-Code.svg?style=for-the-badge
[forks-url]: https://github.com/ManSangSin/Rhythm-Code/network/members
[stars-shield]: https://img.shields.io/github/stars/ManSangSin/Rhythm-Code.svg?style=for-the-badge
[stars-url]: https://github.com/ManSangSin/Rhythm-Code/stargazers
[issues-shield]: https://img.shields.io/github/issues/ManSangSin/Rhythm-Code.svg?style=for-the-badge
[issues-url]: https://github.com/ManSangSin/Rhythm-Code/issues
[license-shield]: https://img.shields.io/github/license/ManSangSin/Rhythm-Code.svg?style=for-the-badge
[license-url]: https://github.com/ManSangSin/Rhythm-Code/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Postgres]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
