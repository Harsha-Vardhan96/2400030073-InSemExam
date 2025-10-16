

int main() {
    int n;
    printf("Enter number of jobs: ");
    scanf("%d", &n);

    char job[100];
    int deadline[100];
    int profit[100];

    int maxDeadline = 0;

    // Read input
    for(int i = 0; i < n; i++){
        scanf(" %c %d %d", &job[i], &deadline[i], &profit[i]);
        if(deadline[i] > maxDeadline){
            maxDeadline = deadline[i];
        }
    }

    // Sort by profit (descending)
    for(int i = 0; i < n-1; i++){
        for(int j = i+1; j < n; j++){
            if(profit[i] < profit[j]){
                int tp = profit[i];
                profit[i] = profit[j];
                profit[j] = tp;

                int td = deadline[i];
                deadline[i] = deadline[j];
                deadline[j] = td;

                char tj = job[i];
                job[i] = job[j];
                job[j] = tj;
            }
        }
    }

    int slot[101];
    for(int i = 1; i <= maxDeadline; i++){
        slot[i] = -1;
    }

    int totalProfit = 0;

    // Schedule
    for(int i = 0; i < n; i++){
        for(int j = deadline[i]; j >= 1; j--){
            if(slot[j] == -1){
                slot[j] = i;
                totalProfit += profit[i];
                break;
            }
        }
    }

    printf("Job sequence: ");
    for(int i = 1; i <= maxDeadline; i++){
        if(slot[i] != -1){
            printf("%c ", job[slot[i]]);
        }
    }

    printf("\nTotal Profit: %d\n", totalProfit);

    return 0;
}
