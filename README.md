# Converse 2K23
**Official repository of the Converse Techfest website**

Sarvajanik College of Engineering and Technology - Department of Information Technology and Artificial Intelligence & Data Science



### Web Design Team
[Kritik Jiyaviya](https://github.com/Kritik-J) \
[Krishna Kalani](https://github.com/Krishnakalani111) \
[Jaimin Kapopara](https://github.com/Jaiminkapopara) \
[Rohit Sonvane](https://github.com/Rohitsonvane88) \
[Bhagya Patel](https://github.com/Code-Knightt)

## Installation

### FIRST STEP
Change the directory to the project

```bash
  cd converse2k23
```
### SECOND STEP
Install the neccasary packages

```bash
  npm install
```
### THIRD STEP
Configure Prisma

Ensure that the schema.prisma file is set up correctly in your project directory. This file should contain the database connection settings and model definitions.

### FORTH STEP
Generate Prsima Client

```bash
  npx prisma generate
```
### FIFTH STEP
Migrate the Database (if needed)
If there are pending migrations, you may need to apply them to the database:

```bash
  npx prisma migrate dev
```

### SIXTH STEP
Start the Application

```bash
  npm run dev
```

