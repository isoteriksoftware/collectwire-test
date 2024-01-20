# collectwire-test

This Node.js/Express API performs various operations on matrices. It exposes endpoints for echoing, inverting, flattening, calculating the sum, and multiplying matrix elements.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm/yarn installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/isoteriksoftware/collectwire-test.git
```

2. Navigate to the project directory:

```bash
cd collectwire-test
```

3. Install dependencies:

```bash
npm install
```

### Usage

Start the server:

```bash
npm run dev
```

The server will be running at `http://localhost:8088`.

### Endpoints

- **Echo (POST /echo):** Returns the matrix as a string in matrix format.
- **Invert (POST /invert):** Returns the inverted matrix as a string.
- **Flatten (POST /flatten):** Returns the matrix as a 1-line string, with values separated by commas.
- **Sum (POST /sum):** Returns the sum of all elements in the matrix.
- **Multiply (POST /multiply):** Returns the product of the integers in the matrix.

### Request Example

You can use tools like curl to send requests. For example, to perform an echo operation:

```bash
curl -X POST -F 'file=@/path/to/matrix.csv' "http://localhost:8088/echo"
```

### Tests

Run the tests:

```bash
npm run test
```
