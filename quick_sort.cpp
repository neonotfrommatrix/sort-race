/* C implementation QuickSort */
#include<stdio.h> 
#include<iostream>

char arr[] = { '0','B','A','3','2','8','4','7','6','5','1','9' };
bool state[12] = {1,1,1,1,1,1,1,1,1,1,1,1};
int low=0;
int high=11;
char pivot = arr[high];
int iP = (low - 1);
int j = 0;
bool bLow=false;
bool bHigh = false;

void FindLow()
{
	for (int i = 0; i < 12; ++i)
	{
		if ((bLow == false) && (state[i] == true))
		{

			low = i;
			bLow = true;
			std::cout << "foundlow " << i << std::endl;
			return;
		}
	}
}
void FindHigh()
{
	for (int i = 0; i < 12; ++i)
	{
		std::cout << state[i];
	}
	std::cout << std::endl;
	for (int i = 0; i < 12; ++i)
	{
		std::cout << "bLow is " << bLow << " the state is " << state[i] << " and i is " << i << "\n";
		if ((bLow == true) && (state[i] == false) && (i>=low))
		{
			//std::cout << i;
			high = i - 1;
			if (high == -1)
				high = 0;
			bLow = false;
			std::cout << " foundhigh " << high << std::endl;
			return;
		}
	}
	high = 11;
	bLow = false;
	std::cout << " foundhigh " << high << std::endl;
	return;
}

void printArray(char arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
	{
		printf("%c ", arr[i]);
	}
	std::cout << std::endl;
}

void swap(char* a, char* b)
{
	char t = *a;
	*a = *b;
	*b = t;
}

void partition()
{
	if (j <= high)
	{
		std::cout << "Indexing through " << j << " \n";
		if (arr[j] <= pivot)
		{
			iP++;
			swap(&arr[iP], &arr[j]);
		}
		//print;
		printArray(arr, 12);
		//std::cin.get();
		j++;
	}
	else
	{
		std::cout << "Went through one cycle time to reset\n";
		std::cout <<  iP <<  " Im ip \n";
		//if(state[iP]==1)
		//	swap(&arr[iP+1], &arr[high]);
		state[iP] = 0;
		FindLow();
		FindHigh();
		if (low == high)
		{	
			std::cout << "the high and low were the same\n";
			state[iP-1] = 0;
			FindLow();
			FindHigh();
		}
		//std::cout << high;
		j = low;
		iP = low - 1;
		pivot = arr[high];
	}
}
bool SomeTrue()
{
	for (int i = 0; i < 12; ++i)
	{
		if (state[i] == 1)
			return true;
	}
	return false;
}

// Driver program to test above functions 
int main()
{
	//char arr[] = { '0','B','A','3','2','8','4','7','6','5','1','9' };
	int n = sizeof(arr) / sizeof(arr[0]);
	//quickSort(arr, 0, n - 1);
	//char run = 'r';
	while (SomeTrue())
	{
		//FindLow();
		//FindHigh();
		partition();
		//run == std::cin.get();
	}
	printf("Sorted array: ");
	printArray(arr, n);
	std::cin.get();
	return 0;
}
