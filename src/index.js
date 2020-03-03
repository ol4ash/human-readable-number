module.exports = function toReadable (number) {
    let result='';
	let numberS=number+'';

    let numbers={
            '0': 'zero',
			'1': 'one',
			'2': 'two',
			'3': 'three',
			'4': 'four',
			'5': 'five',
			'6': 'six',
			'7': 'seven',
			'8': 'eight',
			'9': 'nine',
			'10': 'ten',
			'11': 'eleven',
			'12': 'twelve',
			'13': 'thirteen',
			'14': 'fourteen',
			'15': 'fifteen',
			'16': 'sixteen',
			'17': 'seventeen',
			'18': 'eighteen',
			'19': 'nineteen',
			'20': 'twenty',
			'30': 'thirty',
			'40': 'forty',
			'50': 'fifty',
			'60': 'sixty',
			'70': 'seventy',
			'80': 'eighty',
			'90': 'ninety'
        }
        
        if (number==0){
            return 'zero'
        }

        if ((number+'').length==3){
			let num=parseInt(number/100);
			result=result+(numbers[num]+' hundred');
			number=((number+'').slice(1))*1;
			if (number==0){
				return result
			}
		}
		if ((number+'').length==2){

			if((number>=10)&&(number<20)){
                result.length>0? result=result+(' '+numbers[number]):result=result+(numbers[number])
                number='';
			}

			else if (number%10==0){
                result.length>0? result=result+(' '+numbers[number]):result=result+(numbers[number])
                number='';
			}

			else if(parseInt(number/10)>0){
				num=(parseInt(number/10))*10;
				result.length>0? result=result+(' '+numbers[num]):result=result+(numbers[num])
                number=((number+'').slice(1))*1;
            }
            if (number==0){
				return result
			}
		}
		if ((number+'').length==1){
			result.length>0? result=result+(' '+numbers[number]):result=result+(numbers[number])
		}			
    return result
	
  
}
