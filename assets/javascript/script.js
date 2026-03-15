    const activity = document.getElementById('activity')
    const date = document.getElementById('date');
    const button = document.getElementById('button');
    const table = document.getElementById('table');
    const requiredFieldInput = document.getElementById('required-field-input');
    const requiredFieldDate = document.getElementById('required-field-date');


    class tabella{
        #activity;
        #date
        #button;
        #table;
        #requiredFieldInput;
        #requiredFieldDate;

        constructor(activity, date, button, table, requiredFieldInput, requiredFieldDate ){
            this.#activity = activity;
            this.#date = date;
            this.#button = button;
            this.#table = table;
            this.#requiredFieldInput =requiredFieldInput;
            this.#requiredFieldDate = requiredFieldDate;
        }

        #createButton(tr, tdText){
            const tdDo = document.createElement('td');
            const tdDelte = document.createElement('td');
            const tdEdit = document.createElement('td');

            const buttonDo = document.createElement('button');
            const buttonDelete = document.createElement('button');
            const buttonEdit = document.createElement('button');

            buttonDo.classList.add('button-done');
            buttonDelete.classList.add('button-delete');
            buttonEdit.classList.add('button-edit');

            buttonDo.textContent = 'fatto';
            buttonDelete.textContent = 'elimina';
            buttonEdit.textContent = 'modifica';

            buttonDelete.addEventListener('click', () => tr.remove());
            buttonDo.addEventListener('click', () =>{
                tr.classList.toggle('row-done');
            });
            buttonEdit.addEventListener('click', () =>{
                const existingInput = tdText.querySelector('input');

                if (!existingInput){
                    const currentText = tdText.textContent;
                    const input = document.createElement('input');

                    input.type = 'text';
                    input.value = currentText;
                    input.id = 'input-button'

                    tdText.textContent = '';
                    tdText.appendChild(input);

                    buttonEdit.textContent = 'salva';
                }else{
                    tdText.textContent = existingInput.value.trim();
                    buttonEdit.textContent = 'modifica';
                }
            });


            
            tdDo.appendChild(buttonDo);
            tdDelte.appendChild(buttonDelete);
            tdEdit.appendChild(buttonEdit);

            tr.appendChild(tdDo);
            tr.appendChild(tdDelte);
            tr.appendChild(tdEdit);
        }

        #createRow() {
            this.#requiredFieldInput.textContent = '';
            this.#requiredFieldDate.textContent = '';

    
            if (this.#activity.value.trim() === '' || this.#date.value === '') {
                if (this.#activity.value.trim() === '') {
                    this.#requiredFieldInput.textContent = '*campo obbligatorio';
                }
                if (this.#date.value === '') {
                    this.#requiredFieldDate.textContent = '*campo obbligatorio';
                }
            }else {
        
                const tr = document.createElement('tr');
                const tdDate = document.createElement('td');
                const tdText = document.createElement('td');

                tdDate.textContent = this.#date.value;
                tdText.textContent = this.#activity.value;

                tr.appendChild(tdDate);
                tr.appendChild(tdText);

                this.#createButton(tr, tdText);
                this.#table.appendChild(tr);

        
                this.#activity.value = '';
                this.#date.value = '';
    }
}

        pressButton(){
            this.#button.addEventListener('click', () => this.#createRow());
        }
        preessKeyWord(){
            this.#activity.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    if(this.#date.value === ''){
                        this.#date.focus();
                    }else{
                        this.#createRow();
                    }
                }
            });

            this.#date.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    if(this.#activity.value.trim() === ''){
                        this.#activity.focus();
                    }else{
                        this.#createRow();
                    }
                }
            });
        }

        press(){
            this.pressButton();
            this.preessKeyWord();
        }
    }


    const myTable = new tabella(activity, date, button, table, requiredFieldInput, requiredFieldDate);

    myTable.press();