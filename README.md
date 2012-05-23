# linspace

MATLAB-inspired number-generating functions.

## install

    npm install linspace

## require

    > var linspace = require('linspace');

## use

### linspace(from, to, length)

Acts like linspace from matlab:

    > linspace(1,5,15)
    [ 1,
      1.2857142857142856,
      1.5714285714285712,
      1.8571428571428568,
      2.1428571428571423,
      2.428571428571428,
      2.7142857142857135,
      2.999999999999999,
      3.2857142857142847,
      3.5714285714285703,
      3.857142857142856,
      4.1428571428571415,
      4.428571428571427,
      4.714285714285713,
      4.999999999999998 ]


### **BONUS** linspace.logspace(logFrom, logTo, length)

Acts like logspace from matlab:

    > linspace.logspace(-1,6,10)
    [ 0.1,
      0.599484250318941,
      3.5938136638046276,
      21.544346900318846,
      129.1549665014884,
      774.263682681127,
      4641.588833612777,
      27825.59402207126,
      166810.0537200059,
      1000000 ]

## license

MIT/X11
