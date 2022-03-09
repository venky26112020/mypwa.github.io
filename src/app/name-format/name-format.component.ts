import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-format',
  templateUrl: './name-format.component.html',
  styleUrls: ['./name-format.component.css']
})
export class NameFormatComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.allAlphabetsInStar();
    this.callingFunction();
  }

  // JavaScript implementation to print the
  // pattern of alphabets A to Z using *

  // Below height and width variable can be used
  // to create a user-defined sized alphabet's pattern
  private allAlphabetsInStar() {
    // Number of lines for the alphabet's pattern
    let height = 5;
    // Number of character width in each line
    let width = (2 * height) - 1;


    // Function to find the absolute value
    // of a number D
    const abs = (d: number) => {
      return d < 0 ? -1 * d : d;
    }

    // Function to print the pattern of 'A'
    const printA = () => {
      let AStart = ""
      let n = Math.floor(width / 2), i, j;
      for (i = 0; i < height; i++) {
        for (j = 0; j <= width; j++) {
          if (j == n || j == (width - n)
            || (i == Math.floor(height / 2) && j > n
              && j < (width - n)))
            AStart += "*";
          else
            AStart += "&nbsp;&nbsp;";
        }
        AStart += `<br/>`;
        n--;
      }
      return AStart;
    }

    // Function to print the pattern of 'B'
    const printB = () => {
      let BStar = ""
      let i, j, half = Math.floor(height / 2);
      for (i = 0; i < height; i++) {
        BStar += "*";
        for (j = 0; j < width; j++) {
          if ((i == 0 || i == height - 1 || i == half)
            && j < (width - 2))
            BStar += "*";
          else if (j == (width - 2)
            && !(i == 0 || i == height - 1
              || i == half))
            BStar += "*";
          else
            BStar += "&nbsp;&nbsp;";
        }
        BStar += `<br/>`;
      }
      return BStar;
    }

    // Function to print the pattern of 'C'
    const printC = () => {
      let i, j, CStar = "";
      for (i = 0; i < height; i++) {
        CStar += "*";
        for (j = 0; j < (height - 1); j++) {
          if (i == 0 || i == height - 1)
            CStar += "*";
          else
            continue;
        }
        CStar += `<br/>`;
      }
      return CStar;
    }

    // Function to print the pattern of 'D'
    const printD = () => {
      let i, j, DStar = "";
      for (i = 0; i < height; i++) {
        DStar += "*";
        for (j = 0; j < height; j++) {
          if ((i == 0 || i == height - 1)
            && j < height - 1)
            DStar += "*";
          else if (j == height - 1 && i != 0
            && i != height - 1)
            DStar += "*";
          else
            DStar += "&nbsp;&nbsp;";
        }
        DStar += `<br/>`;
      }
      return DStar;
    }

    // Function to print the pattern of 'E'
    const printE = () => {
      let i, j, EStar = "";
      for (i = 0; i < height; i++) {
        EStar += "*";
        for (j = 0; j < height; j++) {
          if ((i == 0 || i == height - 1)
            || (i == Math.floor(height / 2)
              && j <= Math.floor(height / 2)))
            EStar += "*";
          else
            continue;
        }
        EStar += `<br/>`;
      }
      return EStar;
    }

    // Function to print the pattern of 'F'
    const printF = () => {
      let i, j, FStar = "";
      for (i = 0; i < height; i++) {
        FStar += "*";
        for (j = 0; j < height; j++) {
          if ((i == 0) || (i == Math.floor(height / 2)
            && j <= Math.floor(height / 2)))
            FStar += "*";
          else
            continue;
        }
        FStar += `<br/>`;
      }
      return FStar;
    }

    // Function to print the pattern of 'G'
    const printG = () => {
      let i, j, GStar = "";
      width--;
      for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
          if ((i == 0 || i == height - 1)
            && (j == 0 || j == width - 1))
            GStar += "&nbsp;&nbsp;";
          else if (j == 0)
            GStar += "*";
          else if (i == 0 && j <= height)
            GStar += "*";
          else if (i == Math.floor(height / 2)
            && j > Math.floor(height / 2))
            GStar += "*";
          else if (i > Math.floor(height / 2)
            && j == width - 1)
            GStar += "*";
          else if (i == height - 1
            && j < width)
            GStar += "*";
          else
            GStar += "&nbsp;&nbsp;";
        }
        GStar += `<br/>`;
      }
      return GStar;
    }

    // Function to print the pattern of 'H'
    const printH = () => {
      let i, j, HStar = "";
      for (i = 0; i < height; i++) {
        HStar += "*";
        for (j = 0; j < height; j++) {
          if ((j == height - 1)
            || (i == Math.floor(height / 2)))
            HStar += "*";
          else
            HStar += "&nbsp;&nbsp;";
        }
        HStar += `<br/>`;
      }
      return HStar;
    }

    // Function to print the pattern of 'I'
    const printI = () => {
      let i, j, IStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
          if (i == 0 || i == height - 1)
            IStar += "*";
          else if (j == Math.floor(height / 2))
            IStar += "*";
          else
            IStar += "&nbsp;&nbsp;";
        }
        IStar += `<br/>`;
      }
      return IStar;
    }

    // Function to print the pattern of 'J'
    const printJ = () => {
      let i, j, JStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
          if (i == height - 1 && (j > 0
            && j < height - 1))
            JStar += "*";
          else if ((j == height - 1
            && i != height - 1)
            || (i > Math.floor(height / 2) - 1
              && j == 0 && i != height - 1))
            JStar += "*";
          else
            JStar += "&nbsp;&nbsp;";
        }
        JStar += `<br/>`;
      }
      return JStar;
    }

    // Function to print the pattern of 'K'
    const printK = () => {
      let i, j, half = Math.floor(height / 2), dummy = half, KStar = "";
      for (i = 0; i < height; i++) {
        KStar += "*";
        for (j = 0; j <= half; j++) {
          if (j == abs(dummy))
            KStar += "*";
          else
            KStar += "&nbsp;&nbsp;";
        }
        KStar += `<br/>`;
        dummy--;
      }
      return KStar;
    }

    // Function to print the pattern of 'L'
    const printL = () => {
      let i, j, LStar = "";
      for (i = 0; i < height; i++) {
        LStar += "*";
        for (j = 0; j <= height; j++) {
          if (i == height - 1)
            LStar += "*";
          else
            LStar += "&nbsp;&nbsp;";
        }
        LStar += `<br/>`;
      }
      return LStar;
    }

    // Function to print the pattern of 'M'
    const printM = () => {
      let i, j, counter = 0, MStar = "";
      for (i = 0; i < height; i++) {
        MStar += "*";
        for (j = 0; j <= height; j++) {
          if (j == height)
            MStar += "*";
          else if (j == counter
            || j == height - counter - 1)
            MStar += "*";
          else
            MStar += "&nbsp;&nbsp;";
        }
        if (counter == Math.floor(height / 2)) {
          counter = -99999;
        }
        else
          counter++;
        MStar += `<br/>`;
      }
      return MStar;
    }

    // Function to print the pattern of 'N'
    const printN = () => {
      let i, j, counter = 0, NStar = "";
      for (i = 0; i < height; i++) {
        NStar += "*";
        for (j = 0; j <= height; j++) {
          if (j == height)
            NStar += "*";
          else if (j == counter)
            NStar += "*";
          else
            NStar += "&nbsp;&nbsp;";
        }
        counter++;
        NStar += `<br/>`;
      }
      return NStar;
    }

    // Function to print the pattern of 'O'
    const printO = () => {
      let i, j, space = Math.floor(height / 3), OStar = "";
      let width = Math.floor(height / 2) + Math.floor(height / 5) + space + space;
      for (i = 0; i < height; i++) {
        for (j = 0; j <= width; j++) {
          if (j == width - abs(space)
            || j == abs(space))
            OStar += "*";
          else if ((i == 0
            || i == height - 1)
            && j > abs(space)
            && j < width - abs(space))
            OStar += "*";
          else
            OStar += "&nbsp;&nbsp;";
        }
        if (space != 0
          && i < Math.floor(height / 2)) {
          space--;
        }
        else if (i >= (Math.floor(height / 2) + Math.floor(height / 5)))
          space--;
        OStar += `<br/>`;
      }
      return OStar;
    }

    // Function to print the pattern of 'P'
    const printP = () => {
      let i, j, PStar = "";
      for (i = 0; i < height; i++) {
        PStar += "*";
        for (j = 0; j < height; j++) {
          if ((i == 0 || i == Math.floor(height / 2))
            && j < height - 1)
            PStar += "*";
          else if (i < Math.floor(height / 2)
            && j == height - 1 && i != 0)
            PStar += "*";
          else
            PStar += "&nbsp;&nbsp;";
        }
        PStar += `<br/>`;
      }
      return PStar;
    }

    // Function to print the pattern of 'Q'
    const printQ = () => {
      let QStar = printO();
      let i, j, d = height;
      for (i = 0; i < Math.floor(height / 2); i++) {
        for (j = 0; j <= d; j++) {
          if (j == d)
            QStar += "*";
          else
            QStar += "&nbsp;&nbsp;";
        }
        QStar += `<br/>`;
        d++;
      }
      return QStar;
    }

    // Function to print the pattern of 'R'
    const printR = () => {
      let i, j, half = Math.floor(height / 2), RStar = "";
      for (i = 0; i < height; i++) {
        RStar += "*";
        for (j = 0; j < width; j++) {
          if ((i == 0 || i == half)
            && j < (width - 2))
            RStar += "*";
          else if (j == (width - 2)
            && !(i == 0 || i == half))
            RStar += "*";
          else
            RStar += "&nbsp;&nbsp;";
        }
        RStar += `<br/>`;
      }
      return RStar;
    }

    // Function to print the pattern of 'S'
    const printS = () => {
      let i, j, SStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
          if ((i == 0 || i == Math.floor(height / 2)
            || i == height - 1))
            SStar += "*";
          else if (i < Math.floor(height / 2)
            && j == 0)
            SStar += "*";
          else if (i > Math.floor(height / 2)
            && j == height - 1)
            SStar += "*";
          else
            SStar += "&nbsp;&nbsp;";
        }
        SStar += `<br/>`;
      }
      return SStar;
    }

    // Function to print the pattern of 'T'
    const printT = () => {
      let i, j, TStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
          if (i == 0)
            TStar += "*";
          else if (j == Math.floor(height / 2))
            TStar += "*";
          else
            TStar += "&nbsp;&nbsp;";
        }
        TStar += `<br/>`;
      }
      return TStar;
    }

    // Function to print the pattern of 'U'
    const printU = () => {
      let i, j, UStar = "";
      for (i = 0; i < height; i++) {
        if (i != 0 && i != height - 1)
          UStar += "*";
        else
          UStar += "&nbsp;&nbsp;";
        for (j = 0; j < height; j++) {
          if (((i == height - 1)
            && j >= 0
            && j < height - 1))
            UStar += "*";
          else if (j == height - 1 && i != 0
            && i != height - 1)
            UStar += "*";
          else
            UStar += "&nbsp;&nbsp;";
        }
        UStar += `<br/>`;
      }
      return UStar;
    }

    // Function to print the pattern of 'V'
    const printV = () => {
      let i, j, counter = 0, VStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j <= width; j++) {
          if (j == counter
            || j == width - counter - 1)
            VStar += "*";
          else
            VStar += "&nbsp;&nbsp;";
        }
        counter++;
        VStar += `<br/>`;
      }
      return VStar;
    }

    // Function to print the pattern of 'W'
    const printW = () => {
      let i, j, counter = Math.floor(height / 2), WStar = "";
      for (i = 0; i < height; i++) {
        WStar += "*";
        for (j = 0; j <= height; j++) {
          if (j == height)
            WStar += "*";
          else if ((i >= Math.floor(height / 2))
            && (j == counter
              || j == height - counter - 1))
            WStar += "*";
          else
            WStar += "&nbsp;&nbsp;";
        }
        if (i >= Math.floor(height / 2)) {
          counter++;
        }
        WStar += `<br/>`;
      }
      return WStar;
    }

    // Function to print the pattern of 'X'
    const printX = () => {
      let i, j, counter = 0, XStar = "";
      for (i = 0; i <= height; i++) {
        for (j = 0; j <= height; j++) {
          if (j == counter
            || j == height - counter)
            XStar += "*";
          else
            XStar += "&nbsp;&nbsp;";
        }
        counter++;
        XStar += `<br/>`;
      }
      return XStar;
    }

    // Function to print the pattern of 'Y'
    const printY = () => {
      let i, j, counter = 0, YStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j <= height; j++) {
          if (j == counter
            || j == height - counter
            && i <= Math.floor(height / 2))
            YStar += "*";
          else
            YStar += "&nbsp;&nbsp;";
        }
        YStar += `<br/>`;
        if (i < Math.floor(height / 2))
          counter++;
      }
      return YStar;
    }

    // Function to print the pattern of 'Z'
    const printZ = () => {
      let i, j, counter = height - 1, ZStar = "";
      for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
          if (i == 0 || i == height - 1
            || j == counter)
            ZStar += "*";
          else
            ZStar += "&nbsp;&nbsp;";
        }
        counter--;
        ZStar += `<br/>`;
      }
      return ZStar;
    }

    // Function print the pattern of the
    // alphabets from A to Z
    const printPattern = (character: string) => {
      switch (character) {
        case 'A':
          return printA();
        case 'B':
          return printB();
        case 'C':
          return printC();
        case 'D':
          return printD();
        case 'E':
          return printE();
        case 'F':
          return printF();
        case 'G':
          return printG();
        case 'H':
          return printH();
        case 'I':
          return printI();
        case 'J':
          return printJ();
        case 'K':
          return printK();
        case 'L':
          return printL();
        case 'M':
          return printM();
        case 'N':
          return printN();
        case 'O':
          return printO();
        case 'P':
          return printP();
        case 'Q':
          return printQ();
        case 'R':
          return printR();
        case 'S':
          return printS();
        case 'T':
          return printT();
        case 'U':
          return printU();
        case 'V':
          return printV();
        case 'W':
          return printW();
        case 'X':
          return printX();
        case 'Y':
          return printY();
        case 'Z':
          return printZ();
        default:
          return "";
      }
    }
    return printPattern;
  }

  // public createElementToShow(innerHTML = "", color = "red") {
  //   let container = document.getElementById("container");
  //   let content = document.createElement("span");
  //   content.style.color = color;
  //   content.style.margin = '16px';
  //   content.innerHTML = innerHTML;
  //   container && container.appendChild(content);
  // }

  private createSpanElement(div:HTMLDivElement ,innerHTML = "", color = "red") {
    let content = document.createElement("span");
    content.style.color = color;
    content.style.margin = '16px';
    content.innerHTML = innerHTML;
    div && div.appendChild(content);
  }
  public callingFunction() {
    let allChar = "WISH YOU MANY MORE HAPPY RETURN OF THE DAY "
    let i, subDiv:HTMLDivElement= document.createElement("div");
    subDiv.style.display = "flex";
    subDiv.style.justifyContent = "center"
    let container = document.getElementById("container");
    for (i = 0; i < allChar.length; i++) {
      if(allChar[i] == ' ') {
        container && container.appendChild(subDiv);
        subDiv = document.createElement("div");
        subDiv.style.display = "flex";
        subDiv.style.justifyContent = "center"
      } else {
        this.createSpanElement(subDiv, this.allAlphabetsInStar()(allChar[i]),"green")
      }
    }
  }
  // This code is contributed by Krishna

}
